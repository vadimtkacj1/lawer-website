// Test SMTP connection and email sending
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Manually load .env.local file
function loadEnv() {
  const envPath = path.join(__dirname, '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('❌ .env.local file not found!');
    process.exit(1);
  }

  const envFile = fs.readFileSync(envPath, 'utf8');
  const lines = envFile.split('\n');

  lines.forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      const value = valueParts.join('=').trim();
      if (key && value) {
        process.env[key.trim()] = value;
      }
    }
  });
}

loadEnv();

async function testEmail() {
  console.log('📧 Testing SMTP Configuration...\n');

  // Display configuration (without password)
  console.log('Configuration:');
  console.log('HOST:', process.env.EMAIL_SERVER_HOST);
  console.log('PORT:', process.env.EMAIL_SERVER_PORT);
  console.log('USER:', process.env.EMAIL_SERVER_USER);
  console.log('PASSWORD:', process.env.EMAIL_SERVER_PASSWORD ? '***hidden***' : 'NOT SET');
  console.log('TO:', process.env.EMAIL_TO);
  console.log('\n');

  // Check if all variables are set
  if (!process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_SERVER_PORT ||
      !process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
    console.error('❌ Missing environment variables!');
    console.log('Please check your .env.local file');
    process.exit(1);
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      debug: true, // Enable debug output
      logger: true, // Enable logging
    });

    console.log('🔄 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified!\n');

    console.log('📤 Sending test email...');
    const info = await transporter.sendMail({
      from: `"Avi Mashkanta Test" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.EMAIL_TO || 'vadim.tkach1378@gmail.com',
      subject: 'Test Email - Avi Mashkanta',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Test Email</h2>
          <p>This is a test email from your Avi Mashkanta contact form.</p>
          <p>If you received this, your SMTP configuration is working correctly!</p>
          <p><strong>Configuration used:</strong></p>
          <ul>
            <li>Host: ${process.env.EMAIL_SERVER_HOST}</li>
            <li>Port: ${process.env.EMAIL_SERVER_PORT}</li>
            <li>User: ${process.env.EMAIL_SERVER_USER}</li>
          </ul>
        </div>
      `,
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('\n✨ Test completed successfully!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.code) console.error('Error Code:', error.code);
    if (error.response) console.error('Server Response:', error.response);
    console.log('\n💡 Troubleshooting tips:');
    console.log('1. Check if SMTP credentials are correct');
    console.log('2. Verify port 465 is not blocked by firewall');
    console.log('3. Check if SMTP server is accessible from your network');
    console.log('4. Verify EMAIL_SERVER_PASSWORD is correct');
    process.exit(1);
  }
}

testEmail();
