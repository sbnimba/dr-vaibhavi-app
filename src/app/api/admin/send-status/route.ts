import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    let headerBg = '#10b981'; // Emerald for confirmed
    let statusTitle = 'Appointment Confirmed';
    
    if (data.status === 'Rescheduled') {
      headerBg = '#3b82f6'; // Blue
      statusTitle = 'Appointment Rescheduled';
    } else if (data.status === 'Rejected') {
      headerBg = '#ef4444'; // Red
      statusTitle = 'Appointment Declined';
    } else if (data.status === 'Completed') {
      headerBg = '#6b7280'; // Gray
      statusTitle = 'Appointment Completed';
    }

    // Define the beautiful HTML template for status updates
    const htmlBody = `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <div style="background:${headerBg};padding:28px 32px;">
          <h2 style="margin:0;color:#fff;font-size:22px;">🩺 ${statusTitle}</h2>
          <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">Dr. Vaibhavi Dhenge Clinic</p>
        </div>
        <div style="padding:28px 32px;">
          <p style="font-size:15px;color:#1f2937;margin-top:0;">Dear <strong>${data.patientName}</strong>,</p>
          <p style="font-size:15px;color:#4b5563;line-height:1.6;">${data.note || 'There is an update regarding your appointment.'}</p>
          
          <div style="background:#f9fafb;border-radius:12px;padding:20px;margin:24px 0;border:1px solid #f3f4f6;">
            <h3 style="margin-top:0;font-size:14px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">Appointment Details</h3>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:6px 0;color:#6b7280;width:45%;">Reference ID</td><td style="padding:6px 0;font-weight:700;color:#1f2937;">${data.id}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;">Date</td><td style="padding:6px 0;font-weight:700;color:#1f2937;">${data.date}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;">Time Slot</td><td style="padding:6px 0;font-weight:700;color:#1f2937;">${data.timeSlot}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;">Consultation Mode</td><td style="padding:6px 0;font-weight:700;color:#1f2937;">${data.consultationMode}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;">Specialty</td><td style="padding:6px 0;font-weight:700;color:#1f2937;">${data.specialty}</td></tr>
            </table>
          </div>
          
          <p style="font-size:13px;color:#6b7280;margin-bottom:0;">If you have any questions, please contact the clinic at +91 91361 68582.</p>
        </div>
        <div style="background:#f9fafb;padding:16px 32px;font-size:11px;color:#aaa;text-align:center;">This is an automated notification from the Dr. Vaibhavi Dhenge Clinic booking system.</div>
      </div>
    `;

    // Send the email
    const mailOptions = {
      from: `"Dr. Vaibhavi Clinic" <${process.env.GMAIL_USER}>`,
      to: data.emailAddress, // Sending to the patient!
      replyTo: process.env.GMAIL_USER,
      subject: `Appointment Update: ${statusTitle}`,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Status update email sent to patient:', info.messageId);

    return NextResponse.json({ success: true, message: 'Status update sent successfully.' });
  } catch (error) {
    console.error('Error sending status update email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send status update.' },
      { status: 500 }
    );
  }
}
