import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: name, email, message" },
        { status: 400 }
      )
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, CONTACT_RECIPIENT } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { ok: false, error: "Email transport is not configured on the server." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    const to = CONTACT_RECIPIENT || "info@smartpath-consultancy.com"
    const from = MAIL_FROM || SMTP_USER

    const subject = `New contact form submission from ${name}`

    const text = `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nCompany: ${company || "-"}\n\nMessage:\n${message}`

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2 style="margin:0 0 12px;">New Contact Form Submission</h2>
        <p style="margin:0 0 16px;">You have received a new message from the website contact form.</p>
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr>
              <td style="padding: 8px; font-weight: 600; width: 120px;">Name</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: 600;">Email</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: 600;">Phone</td>
              <td style="padding: 8px;">${phone || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: 600;">Company</td>
              <td style="padding: 8px;">${company || "-"}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 16px; padding: 12px; background: #f6f6f6; border-radius: 8px;">
          <div style="font-weight: 600; margin-bottom: 8px;">Message</div>
          <div>${message.replace(/\n/g, "<br/>")}</div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: 'Contact Form <info@smartpath-consultancy.com>',
      to: 'info@smartpath-consultancy.com',
      subject,
      text,
      html,
      replyTo: email,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact form submission failed:", err)
    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 })
  }
}
