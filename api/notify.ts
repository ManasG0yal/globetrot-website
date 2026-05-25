import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Notify the business of a new app launch subscriber
  await transporter.sendMail({
    from: `"Globetria App" <${process.env.GMAIL_USER}>`,
    to: 'info@globetrotmigration.com',
    replyTo: email,
    subject: `New App Launch Subscriber: ${email}`,
    html: `
      <h2 style="color:#0A1628">New Globetria App Launch Subscriber</h2>
      <p style="font-size:16px">Someone signed up to be notified when the Globetria app launches:</p>
      <p style="font-size:18px;font-weight:bold;color:#C9A84C">${email}</p>
      <p style="color:#666;font-size:14px">Signed up at: ${new Date().toLocaleString()}</p>
    `,
  });

  // Send confirmation email to the subscriber
  await transporter.sendMail({
    from: `"Globetria" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `You're on the list — Globetria App`,
    html: `
      <div style="font-family:'Inter',sans-serif;max-width:520px;margin:0 auto;background:#0A1628;border-radius:16px;overflow:hidden">
        <div style="height:4px;background:linear-gradient(90deg,#C9A84C,#E8D48B,#C9A84C)"></div>
        <div style="padding:40px 36px">
          <h1 style="color:#C9A84C;font-size:28px;margin:0 0 8px">You're on the list!</h1>
          <p style="color:rgba(255,255,255,0.7);font-size:15px;line-height:1.6;margin:0 0 24px">
            Thank you for signing up. You'll be among the first to know when the <strong style="color:#fff">Globetria App</strong> launches — your global mobility journey in the palm of your hand.
          </p>
          <div style="background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);border-radius:12px;padding:20px;margin-bottom:28px">
            <p style="color:rgba(255,255,255,0.6);font-size:13px;margin:0 0 12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase">What to expect</p>
            <ul style="color:rgba(255,255,255,0.7);font-size:14px;line-height:2;margin:0;padding-left:18px">
              <li>Real-time application tracking</li>
              <li>Expert chat &amp; consultations</li>
              <li>Document vault &amp; reminders</li>
            </ul>
          </div>
          <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:0">
            — The Globetria Team<br>
            <a href="https://globetrotmigration.com" style="color:#C9A84C">globetrotmigration.com</a>
          </p>
        </div>
      </div>
    `,
  });

  return res.status(200).json({ success: true });
}
