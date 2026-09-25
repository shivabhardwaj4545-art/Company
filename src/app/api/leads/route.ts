import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, projectType, budgetRange, details, countryCode, fullPhone } = body;

    const leadContactPhone = fullPhone || `${countryCode || ''} ${phone || ''}`.trim();
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    console.log('====================================');
    console.log('📥 NEW PROJECT LEAD CAPTURED:');
    console.log('Name:', name);
    console.log('Phone:', leadContactPhone);
    console.log('Email:', email);
    console.log('Project Type:', projectType);
    console.log('Budget Range:', budgetRange);
    console.log('Details:', details || 'N/A');
    console.log('Timestamp:', timestamp);
    console.log('====================================');

    // Attempt to send Notification Email via Nodemailer if SMTP configured, or log fallback
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || 'ssharma636076@gmail.com';
    const smtpPass = process.env.SMTP_PASS;

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9fb; border-radius: 12px; border: 1px solid #e2e8f0;">
          <h2 style="color: #6a57fa; margin-top: 0;">🚀 New Project Request Received!</h2>
          <p style="color: #475467; font-size: 14px;">A new project lead just submitted their inquiry on <strong>AiKodX Studio</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #1e293b;">Client Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #1e293b;">Phone / WhatsApp:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; color: #6a57fa; font-weight: bold;">${leadContactPhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #1e293b;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; color: #0f172a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #1e293b;">Project Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; color: #0f172a;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #1e293b;">Estimated Budget:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; color: #0f172a;">${budgetRange}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; font-weight: bold; color: #1e293b;">Project Details:</td>
              <td style="padding: 10px; border-bottom: 1px solid #edf2f7; color: #0f172a;">${details || 'No additional details provided.'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #1e293b;">Time Received:</td>
              <td style="padding: 10px; color: #64748b; font-size: 12px;">${timestamp}</td>
            </tr>
          </table>

          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
            Sent automatically by <strong>AiKodX Lead Dispatcher</strong>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"AiKodX Leads" <${smtpUser}>`,
        to: process.env.NOTIFICATION_EMAIL || 'ssharma636076@gmail.com',
        subject: `🚀 New Lead: ${name} (${leadContactPhone}) - ${projectType}`,
        html: htmlContent,
      });
      console.log('✅ Notification Email Sent via Nodemailer to ssharma636076@gmail.com!');
    }

    return NextResponse.json({
      success: true,
      message: 'Lead received and email notification dispatched.',
      leadId: `lead_${Date.now()}`,
    });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
