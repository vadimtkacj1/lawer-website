# Troubleshooting Email Issues

## Problem: Email not sending from contact form

### Quick Fix

**99% of the time, this fixes it:**

```bash
# Stop the dev server (Ctrl+C in the terminal where it's running)
# Then restart it:
pnpm dev
```

**Why?** Next.js only loads environment variables when the server **starts**. If you changed `.env.local` while the server was running, it won't pick up the changes.

---

## Step-by-Step Diagnostics

### 1. Test SMTP Connection

Run this command to verify your SMTP credentials work:

```bash
node test-email.js
```

**Expected output:**
- ✅ SMTP connection verified!
- ✅ Email sent successfully!
- Check vadim.tkach1378@gmail.com inbox

**If it fails:**
- ❌ Check `EMAIL_SERVER_HOST`, `EMAIL_SERVER_USER`, `EMAIL_SERVER_PASSWORD` in `.env.local`
- ❌ Verify port 465 is not blocked by firewall
- ❌ Confirm password is correct (no extra spaces)

---

### 2. Check Environment Variables

Verify `.env.local` file has correct values:

```bash
cat .env.local
```

**Should contain:**
```env
EMAIL_SERVER_HOST=mail.privateemail.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=assistant@avi-mashkanta.com
EMAIL_SERVER_PASSWORD=12345678
EMAIL_TO=vadim.tkach1378@gmail.com
```

---

### 3. Test API Endpoint

**First, make sure dev server is running:**
```bash
pnpm dev
```

**Then, in a NEW terminal, run:**
```bash
node test-api.js
```

**Expected output:**
- Status: 200 OK
- Response: { message: "Email sent successfully" }
- ✅ API test successful!

**If you see "Email service not configured":**
- The server didn't load environment variables
- **Solution:** Restart the dev server (Ctrl+C, then `pnpm dev`)

**If you see "Connection refused":**
- Dev server is not running
- **Solution:** Start it with `pnpm dev`

---

### 4. Check Browser Console

1. Open your website in browser
2. Fill out the contact form
3. Open Developer Tools (F12)
4. Go to "Console" tab
5. Submit the form
6. Check for errors

**Common errors:**

**"Failed to send email"**
- Check Network tab for the API response
- Server might not have loaded env variables
- Restart dev server

**"Network error"**
- Dev server crashed or not running
- Check terminal where dev server is running for errors

---

### 5. Check Server Logs

When you submit the form, check the terminal where `pnpm dev` is running.

**You should see:**
- POST /api/contact 200 (means success)

**If you see:**
- POST /api/contact 500 (server error)
  - Check the error message in terminal
  - Usually means env variables not loaded

- POST /api/contact 400 (validation error)
  - Check form data (name too short, phone invalid)

---

## Common Issues & Solutions

### Issue 1: "Email service not configured"

**Cause:** Environment variables not loaded

**Solution:**
1. Verify `.env.local` exists and has correct values
2. **Restart dev server**
3. Wait for server to fully start
4. Try again

### Issue 2: "Invalid phone number"

**Cause:** Phone validation is strict (Israeli format only)

**Valid formats:**
- ✅ `054-123-4567`
- ✅ `0541234567`
- ✅ `+972541234567`

**Invalid formats:**
- ❌ `123456789` (doesn't start with 5)
- ❌ `02-123-4567` (landline, not mobile)

**Solution:** Use a valid Israeli mobile number format

### Issue 3: "Name too short"

**Cause:** Name must be at least 2 characters

**Solution:** Enter a valid name (2+ characters)

### Issue 4: Email sends but not received

**Cause:** Email might be in spam folder or delayed

**Check:**
1. **Spam folder** in vadim.tkach1378@gmail.com
2. Wait 5-10 minutes (sometimes email servers are slow)
3. Check SMTP logs in terminal

**Verify sender address:**
- From: assistant@avi-mashkanta.com
- This is a valid email that should not be blocked

### Issue 5: Port 465 blocked

**Cause:** Firewall or antivirus blocking SMTP port

**Solution:**
1. Temporarily disable firewall/antivirus
2. Try sending email again
3. If it works, add exception for port 465
4. Re-enable firewall/antivirus

**Alternative:** Try port 587 (TLS) instead of 465 (SSL)

Change in `.env.local`:
```env
EMAIL_SERVER_PORT=587
```

Then update API route to use `secure: false` for port 587:
```typescript
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || "465"),
  secure: process.env.EMAIL_SERVER_PORT === "465", // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});
```

---

## Production Issues

### Email works locally but not in production

**Cause:** Environment variables not set in production

**Solution:**

1. **Verify all 5 env variables are set:**
   - `EMAIL_SERVER_HOST`
   - `EMAIL_SERVER_PORT`
   - `EMAIL_SERVER_USER`
   - `EMAIL_SERVER_PASSWORD`
   - `EMAIL_TO`

2. **Check platform logs:**
   - Vercel: Dashboard → Deployments → Select deployment → Logs
   - Netlify: Dashboard → Deploys → Select deploy → Deploy log

3. **Redeploy after setting env variables:**
   - Changes to environment variables require a redeploy
   - Trigger new deployment from dashboard or push to git

4. **Test in production:**
   - Open production URL
   - Fill out contact form
   - Check if email arrives
   - If not, check production logs

---

## Test Commands Summary

```bash
# 1. Test SMTP connection
node test-email.js

# 2. Check environment file
cat .env.local

# 3. Start dev server
pnpm dev

# 4. Test API (in new terminal)
node test-api.js
```

---

## Still Not Working?

If none of the above solutions work:

1. **Copy the error message** from terminal or browser console
2. **Take a screenshot** of the error
3. **Check these files:**
   - `.env.local` - environment variables
   - `src/app/api/contact/route.ts` - API route
   - `src/components/Contact/Contact.tsx` - contact form

4. **Common last resort fixes:**
   - Delete `node_modules` and reinstall: `rm -rf node_modules && pnpm install`
   - Clear Next.js cache: `rm -rf .next`
   - Restart computer (clears any port locks)

---

## Debug Checklist

Use this checklist to debug step by step:

- [ ] `.env.local` file exists
- [ ] All 5 environment variables are set
- [ ] No typos in variable names
- [ ] No extra spaces in values
- [ ] Dev server is running (`pnpm dev`)
- [ ] Dev server was restarted after changing `.env.local`
- [ ] `node test-email.js` succeeds
- [ ] `node test-api.js` succeeds
- [ ] Form validation passes (name 2+ chars, valid phone)
- [ ] No errors in browser console
- [ ] No errors in server terminal
- [ ] Checked spam folder
- [ ] Waited 5-10 minutes for email

If all checkboxes are ✅ and still no email, the issue is likely with the email provider.

---

## Contact

If you've tried everything and still stuck, check:
- [EMAIL_SETUP_INSTRUCTIONS.md](./EMAIL_SETUP_INSTRUCTIONS.md)
- [DEPLOYMENT.md](./DEPLOYMENT.md)
- [VALIDATION_GUIDE.md](./VALIDATION_GUIDE.md)
