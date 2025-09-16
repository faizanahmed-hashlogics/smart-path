# Email Setup for Contact Form

This project uses a Next.js Route Handler (`app/api/contact/route.ts`) with Nodemailer to send contact form submissions to your inbox.

## 1) Install dependency

Run:

```
npm install nodemailer
```

## 2) Add environment variables

Create a `.env.local` file in the project root with the following variables:

```
# SMTP connection info
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password

# From address used when sending
MAIL_FROM=Smart Path Website <no-reply@smartpath-consultancy.com>

# Recipient for contact messages (defaults to info@smartpath-consultancy.com if not set)
CONTACT_RECIPIENT=info@smartpath-consultancy.com
```

Notes:
- `SMTP_PORT=465` typically requires `secure: true` which the code auto-detects. Use `587` for STARTTLS if unsure.
- Use a proper SMTP service (e.g., a transactional provider or your domain’s mailbox provider). Avoid personal Gmail accounts due to modern sending restrictions.

## 3) Restart dev server

After changing dependencies or environment variables, restart the dev server so changes take effect.

## 4) Test the form

- Navigate to the homepage and scroll to `Contact`.
- Fill in required fields (Name, Email, Message) and submit.
- On success, you will see a polite confirmation message and receive an email at `CONTACT_RECIPIENT`.
- On failure, a descriptive error is shown below the form.

## Troubleshooting

- If you see `Cannot find module 'nodemailer'`, ensure the package is installed and the dev server is restarted.
- If sending fails with `Email transport is not configured`, ensure all `SMTP_*` variables are set and correct.
- Some providers require an app password or enabling SMTP access. Check your provider’s documentation.
