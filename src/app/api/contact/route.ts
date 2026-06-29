import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { CalculatorData } from "@/app/calculator/components/MortgageCalculator/types";

const formatCurrency = (n: number) => "₪" + Math.round(n).toLocaleString("he-IL");

// Turn the calculator inputs into a readable note so the CRM lead carries context.
function buildCalculatorMessage(calc?: CalculatorData): string | undefined {
  if (!calc) return undefined;
  return [
    `מחיר נכס: ${formatCurrency(calc.apartmentPrice)}`,
    `הון עצמי: ${formatCurrency(calc.equity)}`,
    `סכום משכנתא: ${formatCurrency(calc.mortgageAmount)}`,
    `תקופה: ${calc.selectedTerm} שנים`,
    `החזר חודשי משוער: ${formatCurrency(calc.monthlyPayment)}`,
  ].join("\n");
}

// Email the lead to the office inbox (existing behaviour). Throws if unconfigured or the send fails.
async function sendLeadEmail(name: string, phone: string, cleanPhone: string): Promise<void> {
  const {
    EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD,
    EMAIL_TO,
  } = process.env;

  if (!EMAIL_SERVER_HOST || !EMAIL_SERVER_PORT || !EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD) {
    throw new Error("Email service not configured");
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_SERVER_HOST,
    port: Number(EMAIL_SERVER_PORT),
    // Use secure: true for port 465, false for 587
    secure: EMAIL_SERVER_PORT === "465",
    auth: {
      user: EMAIL_SERVER_USER,
      pass: EMAIL_SERVER_PASSWORD,
    },
    tls: {
      // Necessary for some Node.js environments to prevent certificate validation errors
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: `"Assistant" <${EMAIL_SERVER_USER}>`,
    to: EMAIL_TO || "vadim.tkach1378@gmail.com",
    subject: `New Lead: ${name}`,
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee;">
        <div style="background-color: #1c3664; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">פנייה חדשה מהאתר</h1>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <p style="font-size: 18px;"><strong>פרטי הלקוח:</strong></p>
          <hr />
          <p><strong>שם מלא:</strong> ${name}</p>
          <p><strong>טלפון:</strong> <a href="tel:${cleanPhone}">${phone}</a></p>
          <div style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <small style="color: #666;">
              This is an automated message from the contact form at avi-mashkanta.com
            </small>
          </div>
        </div>
      </div>
    `,
  });
}

// Forward the lead to the Aiterra CRM public lead-capture endpoint. Throws if unconfigured or rejected.
async function forwardToCrm(payload: {
  name: string;
  phone: string;
  source: string;
  message?: string;
}): Promise<void> {
  const endpoint = process.env.CRM_LEADS_ENDPOINT;
  const publicToken = process.env.CRM_PUBLIC_TOKEN;

  if (!endpoint || !publicToken) {
    throw new Error("CRM lead forwarding not configured (CRM_LEADS_ENDPOINT / CRM_PUBLIC_TOKEN)");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ publicToken, ...payload }),
    // Don't let a hung CRM hold the form's response hostage.
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`CRM responded ${response.status}: ${detail}`);
  }
}

export async function POST(request: NextRequest) {
  let body: {
    name?: string;
    phone?: string;
    source?: string;
    calculatorData?: CalculatorData;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, source, calculatorData } = body;

  // Input validation (shared by both sinks)
  if (!name?.trim() || name.trim().length < 2) {
    return NextResponse.json(
      { error: "שם חייב להכיל לפחות 2 תווים" },
      { status: 400 }
    );
  }

  const cleanPhone = phone?.replace(/[\s\-()]/g, "");
  const phoneRegex = /^(\+?972|0)?([5]\d{8})$/;
  if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
    return NextResponse.json(
      { error: "מספר טלפון לא תקין" },
      { status: 400 }
    );
  }

  const leadSource = source || request.headers.get("referer") || "avi-mashkanta.com";
  const message = buildCalculatorMessage(calculatorData);

  // Deliver to both the email inbox and the CRM. A failure in one must not drop the other.
  const [emailResult, crmResult] = await Promise.allSettled([
    sendLeadEmail(name, phone as string, cleanPhone),
    forwardToCrm({ name, phone: phone as string, source: leadSource, message }),
  ]);

  if (emailResult.status === "rejected") {
    console.error("Lead email failed:", emailResult.reason);
  }
  if (crmResult.status === "rejected") {
    console.error("CRM forward failed:", crmResult.reason);
  }

  // As long as the lead reached at least one destination, report success to the visitor.
  const delivered =
    emailResult.status === "fulfilled" || crmResult.status === "fulfilled";

  if (!delivered) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
