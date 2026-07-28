import Link from "next/link";
import LocationIcon from "@/components/icons/LocationIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import MapFacade from "./MapFacade";

const serviceLinks = [
  { href: "/services/mortgage-for-purchase", label: "משכנתא לרכישת דירה" },
  { href: "/service-areas/mortgage-advisor-tel-aviv", label: "יועץ משכנתאות בתל אביב" },
  { href: "/service-areas/mortgage-advisor-holon", label: "יועץ משכנתאות בחולון" },
  { href: "/service-areas/mortgage-advisor-bat-yam", label: "יועץ משכנתאות בבת ים" },
  { href: "/service-areas/mortgage-advisor-rishon-lezion", label: "יועץ משכנתאות בראשון לציון" },
  { href: "/services/dira-behanacha-mortgage", label: "מחיר למשתכן" },
  { href: "/services/loan-consolidation", label: "מחזור ואיחוד הלוואות" },
  { href: "/services/reverse-mortgage", label: "משכנתא הפוכה" },
  { href: "/services/mortgage-refused", label: "מסורבי בנקים ומורכבות" },
  { href: "/services/renovation-mortgage", label: "משכנתא לשיפוץ" },
  { href: "/services/foreign-mortgages", label: "משכנתא לתושבי חוץ" },
  { href: "/services/debt-consolidation", label: "משכנתא לכל מטרה" },
  { href: "/blog", label: "בלוג משכנתאות" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-dk text-white py-10 sm:py-12 md:py-14 lg:py-16" dir="rtl">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* About */}
          <div className="flex flex-col items-start text-right">
            <div className="text-white font-bold text-sm uppercase tracking-[0.08em] mb-4">
              אבי - הבית למשכנתאות
            </div>
            <p className="text-white/70 text-sm sm:text-[15px] font-normal leading-relaxed max-w-sm">
              ליווי מקצועי ואובייקטיבי בתהליך לקיחת המשכנתא. אנחנו עובדים
              בשבילכם, לא בשביל הבנק, כדי להבטיח את התנאים המשתלמים ביותר.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col items-start text-right">
            <div className="text-white font-bold text-sm uppercase tracking-[0.08em] mb-4">שירותים</div>
            <nav aria-label="שירותים" className="flex flex-col space-y-1.5 sm:space-y-2 w-full">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm sm:text-[15px] font-normal hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start text-right">
            <div className="text-white font-bold text-sm uppercase tracking-[0.08em] mb-4">צרו קשר</div>
            <address className="not-italic space-y-1.5 sm:space-y-2 text-white/70 text-sm sm:text-[15px] font-normal w-full">
              <p className="flex items-center gap-2 justify-start">
                <LocationIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                יהושע חנקין 83, חולון
              </p>
            </address>

            {/* Working Hours */}
            <div className="mt-6 space-y-1 text-white/70 text-sm sm:text-[15px] font-normal w-full">
              <div className="text-white font-bold text-sm uppercase tracking-[0.08em] mb-2">שעות פעילות</div>
              <p>ראשון - חמישי: 9:00 - 20:00</p>
              <p>שישי: סגור</p>
              <p>שבת: סגור</p>
            </div>

            {/* Google Map */}
            <div className="mt-4 sm:mt-5 md:mt-6 w-full">
              <MapFacade />
            </div>

            {/* Social Links */}
            {/* <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5 md:mt-6 justify-center sm:justify-start lg:justify-center w-full">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-start text-right sm:col-span-2 lg:col-span-1">
            <div className="text-white font-bold text-sm uppercase tracking-[0.08em] mb-4">מידע משפטי</div>
            <nav aria-label="מידע משפטי" className="flex flex-col space-y-1.5 sm:space-y-2 w-full">
              <Link
                href="/accessibility"
                className="text-white/70 text-sm sm:text-[15px] font-normal hover:text-white transition-colors"
              >
                הצהרת נגישות
              </Link>
              <Link
                href="/privacy"
                className="text-white/70 text-sm sm:text-[15px] font-normal hover:text-white transition-colors"
              >
                מדיניות פרטיות
              </Link>
              <Link
                href="/terms"
                className="text-white/70 text-sm sm:text-[15px] font-normal hover:text-white transition-colors"
              >
                תנאי שימוש
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm font-normal px-2">
            © {new Date().getFullYear()} אבי - הבית למשכנתאות. כל הזכויות
            שמורות. תכנון נכון שחוסך לכם כסף.
          </p>
          {/* Build credit. Laid out as flex items rather than one bidi string:
              a bare "|" between a Hebrew run and a Latin run gets reordered by
              the bidi algorithm and lands in the wrong place. */}
          {/* dir="ltr" so the mark sits on the physical left of the line: in the
              RTL footer a plain flex row would start it on the right. Each part
              is its own flex item, so the bidi algorithm never reorders the
              separator between the Latin and Hebrew runs. */}
          <p className="mt-6 sm:mt-8 flex justify-center text-xs sm:text-sm">
            <a
              href="https://aiterra.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="aiterra-brand inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
            >
              <span className="aiterra-mark" aria-hidden="true" />
              <span>Aiterra</span>
              <span aria-hidden="true">|</span>
              <span dir="rtl">בניית אתרים ופרסום</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
