# Email Configuration Instructions

This guide will help you set up email functionality for the contact form on your website.

## Overview

When visitors fill out the contact form on your website, an email will be automatically sent to `vadim.tkach1378@gmail.com` with their information.

The system uses **Private Email SMTP server** (`mail.privateemail.com`) to send emails from `assistant@avi-mashkanta.com`.

## Setup Steps

### 1. Configure Environment Variables

The email configuration is already set up in your `.env.local` file:

```env
EMAIL_SERVER_HOST=mail.privateemail.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=assistant@avi-mashkanta.com
EMAIL_SERVER_PASSWORD=12345678
EMAIL_TO=vadim.tkach1378@gmail.com
```

**For production deployment**, you'll need to add these same variables to your hosting platform (Vercel, Netlify, etc.)

### 2. Restart Your Development Server

After updating the `.env.local` file:

```bash
# Stop the current server (Ctrl+C)
# Start it again
pnpm dev
```

### 3. Test the Contact Form

1. Open your website in the browser
2. Scroll to the contact form section
3. Fill in the name and phone number
4. Click the submit button
5. You should receive an email at `vadim.tkach1378@gmail.com`

## Email Format

The email you receive will include:
- **Subject**: "New Contact Form Submission - Avi Mashkanta"
- **From**: "Avi Mashkanta" <assistant@avi-mashkanta.com>
- **To**: vadim.tkach1378@gmail.com
- **Content**: Formatted HTML email with:
  - Customer's full name (שם מלא)
  - Customer's phone number (טלפון)
  - Professional styling matching your website

## SMTP Configuration Details

The system is configured to use **Private Email SMTP** with the following settings:

- **SMTP Server**: mail.privateemail.com
- **Port**: 465 (SSL)
- **Username**: assistant@avi-mashkanta.com
- **Sender Email**: assistant@avi-mashkanta.com
- **Recipient Email**: vadim.tkach1378@gmail.com

## Troubleshooting

### "Error sending email" message appears

**Check these things:**

1. **SMTP credentials are correct**:
   - Verify `EMAIL_SERVER_USER` and `EMAIL_SERVER_PASSWORD` in `.env.local`
   - Make sure there are no extra spaces or quotes

2. **Environment variables are loaded**:
   - Restart your development server after changing `.env.local`
   - Next.js only reads environment variables when the server starts

3. **SMTP server is accessible**:
   - Verify `mail.privateemail.com` is accessible from your network
   - Check if port 465 is not blocked by firewall

4. **Server logs**:
   - Check the terminal/console for detailed error messages
   - Look for authentication errors or connection issues

### Still having issues?

Check the server logs in your terminal for more detailed error messages. Common issues include:
- Incorrect password
- Firewall blocking port 465
- SMTP server temporarily unavailable

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add these environment variables to your hosting platform:
   - `EMAIL_SERVER_HOST=mail.privateemail.com`
   - `EMAIL_SERVER_PORT=465`
   - `EMAIL_SERVER_USER=assistant@avi-mashkanta.com`
   - `EMAIL_SERVER_PASSWORD=your-smtp-password`
   - `EMAIL_TO=vadim.tkach1378@gmail.com`

2. The variables should be added in your hosting dashboard's environment variables section.

**📘 See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed CI/CD setup instructions for:**
- Vercel
- Netlify
- Railway
- Render
- Docker
- GitHub Actions

## Files Modified

- `src/app/api/contact/route.ts` - API endpoint for sending emails
- `src/components/Contact/Contact.tsx` - Contact form component with form submission logic
- `.env.local` - Local environment variables (not committed to git)
- `.env.example` - Example environment variables template
- `package.json` - Added nodemailer dependency

## Security Notes

- ✅ `.env.local` is in `.gitignore` and will not be committed to git
- ✅ SMTP credentials are stored securely in environment variables
- ✅ Sensitive data is never exposed in client-side code
- ✅ Email recipient is configurable via `EMAIL_TO` environment variable
- ⚠️ **IMPORTANT**: Never commit `.env.local` to version control
- ⚠️ **IMPORTANT**: Use strong passwords for SMTP authentication
