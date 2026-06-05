import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, country, preferredCountries, howDidYouHear, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Globetrot <onboarding@resend.dev>',
      to: 'info@globetrot.com',
      reply_to: email,
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
          <div style="height:4px;background:linear-gradient(90deg,#C9A84C,#E8D48B,#C9A84C)"></div>
          <div style="padding:32px">
            <h2 style="color:#0A1628;margin:0 0 24px;font-size:22px">New Lead — Globetrot Website</h2>
            <table style="border-collapse:collapse;width:100%;font-size:14px">
              <tr style="background:#f9fafb">
                <td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;color:#374151;width:180px">Name</td>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;color:#111827">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;color:#374151">Email</td>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;color:#111827"><a href="mailto:${email}" style="color:#C9A84C">${email}</a></td>
              </tr>
              <tr style="background:#f9fafb">
                <td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;color:#374151">Phone</td>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;color:#111827">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;color:#374151">Current Country</td>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;color:#111827">${country || '—'}</td>
              </tr>
              <tr style="background:#f9fafb">
                <td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;color:#374151">Destination</td>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;color:#111827">${preferredCountries || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;color:#374151">How They Heard</td>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;color:#111827">${howDidYouHear || '—'}</td>
              </tr>
              <tr style="background:#f9fafb">
                <td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;color:#374151">Message</td>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;color:#111827">${message}</td>
              </tr>
              <tr>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;color:#374151">Submitted At</td>
                <td style="padding:10px 14px;border:1px solid #e5e7eb;color:#6b7280;font-size:13px">${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })} (Dubai time)</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#FFF9EC;border-left:3px solid #C9A84C;border-radius:0 8px 8px 0">
              <p style="margin:0;font-size:13px;color:#92400e">💡 Hit <strong>Reply</strong> to respond directly to the client at <strong>${email}</strong></p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
