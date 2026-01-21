# Deployment Guide - CI/CD Setup

This guide explains how to deploy the website with email functionality to various hosting platforms.

## Required Environment Variables

For the contact form to work in production, you need to set these environment variables:

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `EMAIL_SERVER_HOST` | SMTP server hostname | `mail.privateemail.com` |
| `EMAIL_SERVER_PORT` | SMTP server port (465 for SSL, 587 for TLS) | `465` |
| `EMAIL_SERVER_USER` | SMTP username (email address) | `assistant@avi-mashkanta.com` |
| `EMAIL_SERVER_PASSWORD` | SMTP password | `your-smtp-password` |
| `EMAIL_TO` | Email address to receive contact form submissions | `vadim.tkach1378@gmail.com` |

## SMTP Configuration

The system uses **Private Email SMTP** server:

- **Host**: `mail.privateemail.com`
- **Port**: `465` (SSL)
- **From**: `assistant@avi-mashkanta.com`
- **To**: `vadim.tkach1378@gmail.com`

No additional setup is required - just add the environment variables to your hosting platform.

---

## Deployment on Vercel (Recommended for Next.js)

### Option 1: Via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Before deploying, add environment variables:
   - Click "Environment Variables"
   - Add each variable:
     ```
     EMAIL_SERVER_HOST = mail.privateemail.com
     EMAIL_SERVER_PORT = 465
     EMAIL_SERVER_USER = assistant@avi-mashkanta.com
     EMAIL_SERVER_PASSWORD = your-smtp-password
     EMAIL_TO = vadim.tkach1378@gmail.com
     ```
5. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add EMAIL_SERVER_HOST
# Enter: mail.privateemail.com

vercel env add EMAIL_SERVER_PORT
# Enter: 465

vercel env add EMAIL_SERVER_USER
# Enter: assistant@avi-mashkanta.com

vercel env add EMAIL_SERVER_PASSWORD
# Enter: your-smtp-password

vercel env add EMAIL_TO
# Enter: vadim.tkach1378@gmail.com

# Redeploy with new env variables
vercel --prod
```

### Option 3: Via vercel.json (Not recommended for secrets)

**⚠️ Do NOT commit secrets to git!**

If you want to use `vercel.json` for configuration (without secrets):

```json
{
  "env": {
    "EMAIL_TO": "vadim.tkach1378@gmail.com"
  }
}
```

Then add `EMAIL_USER` and `EMAIL_PASSWORD` via dashboard or CLI.

---

## Deployment on Netlify

### Via Netlify Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build` or `pnpm build`
   - Publish directory: `.next`
6. Before deploying, add environment variables:
   - Go to "Site settings" → "Environment variables"
   - Add variables:
     ```
     EMAIL_SERVER_HOST = mail.privateemail.com
     EMAIL_SERVER_PORT = 465
     EMAIL_SERVER_USER = assistant@avi-mashkanta.com
     EMAIL_SERVER_PASSWORD = your-smtp-password
     EMAIL_TO = vadim.tkach1378@gmail.com
     ```
7. Click "Deploy site"

### Via Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Set environment variables
netlify env:set EMAIL_SERVER_HOST "mail.privateemail.com"
netlify env:set EMAIL_SERVER_PORT "465"
netlify env:set EMAIL_SERVER_USER "assistant@avi-mashkanta.com"
netlify env:set EMAIL_SERVER_PASSWORD "your-smtp-password"
netlify env:set EMAIL_TO "vadim.tkach1378@gmail.com"

# Deploy
netlify deploy --prod
```

---

## Deployment on Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables:
   - Click "Variables" tab
   - Add:
     ```
     EMAIL_SERVER_HOST = mail.privateemail.com
     EMAIL_SERVER_PORT = 465
     EMAIL_SERVER_USER = assistant@avi-mashkanta.com
     EMAIL_SERVER_PASSWORD = your-smtp-password
     EMAIL_TO = vadim.tkach1378@gmail.com
     ```
5. Railway will automatically deploy

---

## Deployment on Render

1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your repository
4. Configure:
   - Build Command: `pnpm install && pnpm build`
   - Start Command: `pnpm start`
5. Add environment variables:
   - Scroll to "Environment Variables"
   - Add:
     ```
     EMAIL_SERVER_HOST = mail.privateemail.com
     EMAIL_SERVER_PORT = 465
     EMAIL_SERVER_USER = assistant@avi-mashkanta.com
     EMAIL_SERVER_PASSWORD = your-smtp-password
     EMAIL_TO = vadim.tkach1378@gmail.com
     ```
6. Click "Create Web Service"

---

## Deployment with Docker

If you're using Docker for deployment:

### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - EMAIL_SERVER_HOST=mail.privateemail.com
      - EMAIL_SERVER_PORT=465
      - EMAIL_SERVER_USER=assistant@avi-mashkanta.com
      - EMAIL_SERVER_PASSWORD=your-smtp-password
      - EMAIL_TO=vadim.tkach1378@gmail.com
```

### Using .env file with Docker

Create `.env.production`:

```env
EMAIL_SERVER_HOST=mail.privateemail.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=assistant@avi-mashkanta.com
EMAIL_SERVER_PASSWORD=your-smtp-password
EMAIL_TO=vadim.tkach1378@gmail.com
```

**⚠️ Add `.env.production` to `.gitignore`!**

Then use:

```bash
docker-compose --env-file .env.production up
```

---

## GitHub Actions CI/CD

If you're using GitHub Actions for deployment:

### .github/workflows/deploy.yml

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build
        env:
          EMAIL_SERVER_HOST: ${{ secrets.EMAIL_SERVER_HOST }}
          EMAIL_SERVER_PORT: ${{ secrets.EMAIL_SERVER_PORT }}
          EMAIL_SERVER_USER: ${{ secrets.EMAIL_SERVER_USER }}
          EMAIL_SERVER_PASSWORD: ${{ secrets.EMAIL_SERVER_PASSWORD }}
          EMAIL_TO: ${{ secrets.EMAIL_TO }}

      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

### Add Secrets to GitHub

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add each secret:
   - `EMAIL_SERVER_HOST`: `mail.privateemail.com`
   - `EMAIL_SERVER_PORT`: `465`
   - `EMAIL_SERVER_USER`: `assistant@avi-mashkanta.com`
   - `EMAIL_SERVER_PASSWORD`: your-smtp-password
   - `EMAIL_TO`: `vadim.tkach1378@gmail.com`
   - `VERCEL_TOKEN`: your Vercel token (if deploying to Vercel)

---

## Security Best Practices

### ✅ DO:

- ✅ Store credentials in environment variables
- ✅ Use different credentials for staging/production
- ✅ Add `.env.local` and `.env.production` to `.gitignore`
- ✅ Use Gmail App Passwords (not your actual password)
- ✅ Rotate App Passwords periodically
- ✅ Use platform-specific secret management (Vercel Secrets, GitHub Secrets, etc.)

### ❌ DON'T:

- ❌ Commit `.env` files with real credentials
- ❌ Share App Passwords in plain text
- ❌ Use your actual Gmail password
- ❌ Store credentials in `vercel.json` or other config files
- ❌ Expose environment variables in client-side code

---

## Verifying Deployment

After deployment, test the contact form:

1. Open your production URL
2. Fill out the contact form
3. Submit the form
4. Check `vadim.tkach1378@gmail.com` for the email

If email doesn't arrive:

1. Check production logs for errors
2. Verify environment variables are set correctly
3. Ensure Gmail App Password is correct
4. Check Gmail spam folder

---

## Environment Variable Checklist

Before deploying, verify:

- [ ] SMTP credentials are correct
- [ ] `EMAIL_SERVER_HOST` set in production
- [ ] `EMAIL_SERVER_PORT` set in production
- [ ] `EMAIL_SERVER_USER` set in production
- [ ] `EMAIL_SERVER_PASSWORD` set in production
- [ ] `EMAIL_TO` set in production
- [ ] `.env.local` and `.env.production` in `.gitignore`
- [ ] Test email sent successfully in production

---

## Support

If you encounter issues:

1. Check the logs in your hosting platform
2. Verify environment variables are correct
3. Test locally with the same environment variables
4. Review [EMAIL_SETUP_INSTRUCTIONS.md](./EMAIL_SETUP_INSTRUCTIONS.md)

## Monitoring

Consider adding monitoring for production:

- Set up email delivery monitoring
- Track failed email attempts in logs
- Set up alerts for API errors
- Monitor form submission rates

---

## Alternative: Using SendGrid or Other Services

If Gmail doesn't work in production, consider using:

- [SendGrid](https://sendgrid.com/) - Free tier: 100 emails/day
- [Mailgun](https://www.mailgun.com/) - Free tier: 100 emails/day
- [AWS SES](https://aws.amazon.com/ses/) - Very cheap, reliable
- [Resend](https://resend.com/) - Modern, developer-friendly

These services are more reliable for production than Gmail SMTP.
