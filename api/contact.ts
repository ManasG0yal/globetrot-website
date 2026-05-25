import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, country, preferredCountries, howDidYouHear, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Globetria Contact Form" <${process.env.GMAIL_USER}>`,
    to: 'info@globetrotmigration.com',
    replyTo: email,
    subject: `New Enquiry from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${firstName} ${lastName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || '-'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Country</td><td style="padding:8px;border:1px solid #ddd">${country || '-'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Countries of Interest</td><td style="padding:8px;border:1px solid #ddd">${Array.isArray(preferredCountries) ? preferredCountries.join(', ') : '-'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">How did they hear</td><td style="padding:8px;border:1px solid #ddd">${howDidYouHear || '-'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Submitted at</td><td style="padding:8px;border:1px solid #ddd">${new Date().toLocaleString()}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
