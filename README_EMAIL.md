# Email Setup - Quick Start

Contact form on the website sends emails to **vadim.tkach1378@gmail.com**

Uses **Private Email SMTP** (`mail.privateemail.com`) from `assistant@avi-mashkanta.com`

## Local Development Setup

1. **Environment variables are already configured in `.env.local`:**
   ```env
   EMAIL_SERVER_HOST=mail.privateemail.com
   EMAIL_SERVER_PORT=465
   EMAIL_SERVER_USER=assistant@avi-mashkanta.com
   EMAIL_SERVER_PASSWORD=12345678
   EMAIL_TO=vadim.tkach1378@gmail.com
   ```

2. **Restart server:**
   ```bash
   pnpm dev
   ```

3. **Test the form** - fill out the contact form and check vadim.tkach1378@gmail.com

## Production Deployment

Add these 5 environment variables to your hosting platform:

```env
EMAIL_SERVER_HOST=mail.privateemail.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=assistant@avi-mashkanta.com
EMAIL_SERVER_PASSWORD=your-smtp-password
EMAIL_TO=vadim.tkach1378@gmail.com
```

### Platform-Specific Guides:

- **Vercel**: Dashboard → Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- **Railway**: Variables tab
- **Render**: Environment Variables section
- **GitHub Actions**: Repository → Settings → Secrets

## Full Documentation

- 📖 [EMAIL_SETUP_INSTRUCTIONS.md](./EMAIL_SETUP_INSTRUCTIONS.md) - Detailed local setup
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - CI/CD and deployment guides

## File Structure

```
.
├── src/app/api/contact/route.ts    # Email API endpoint
├── src/components/Contact/          # Contact form component
├── .env.local                       # Local environment variables (git ignored)
├── .env.example                     # Template for environment variables
└── package.json                     # Added nodemailer dependency
```

## Testing

1. Open website
2. Fill contact form (שם מלא, מספר טלפון)
3. Click "שלח הודעה"
4. Check vadim.tkach1378@gmail.com inbox

## Troubleshooting

**Email not sending?**

1. ✅ Check SMTP credentials in `.env.local`
2. ✅ Restart dev server after changing `.env.local`
3. ✅ Verify port 465 is not blocked
4. ✅ Check server logs for errors

**In Production:**

1. ✅ Verify all 5 env variables are set
2. ✅ Check platform logs
3. ✅ Redeploy after adding env variables

## Security

- ✅ `.env.local` is in `.gitignore` (not committed)
- ✅ SMTP credentials stored in environment variables only
- ✅ Sensitive data never exposed to client
- ✅ Email recipient configurable via `EMAIL_TO`

---

**Need help?** See full documentation above or contact support.
