import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });

  }

  console.log(process.env.ZOHO_EMAIL_USER);
  console.log(process.env.ZOHO_EMAIL_PASS);

  // Configure nodemailer SMTP transport for Zoho
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL_USER,
      pass: process.env.ZOHO_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `ACS Contact Form <${process.env.ZOHO_EMAIL_USER}>`,
      to: 'support@automatedconsultancy.com',
      subject: `[ACS Contact] ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
} 