import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import config from '@/app/config';

export async function POST(req: NextRequest) {
  console.log('Contact API: Request received');
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    console.log('Contact API: Missing required fields', { name, email, subject, message });
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  console.log('Contact API: Creating transporter with Zoho credentials');
  // Configure nodemailer SMTP transport using config
  const transporter = nodemailer.createTransport({
    ...config.email.smtp,
    debug: true, // Enable debug logging
    logger: true, // Enable logger
  });

  // Verify SMTP connection
  try {
    console.log('Contact API: Verifying SMTP connection');
    await transporter.verify();
    console.log('Contact API: SMTP connection verified successfully');
  } catch (error) {
    console.error('Contact API: SMTP connection verification failed:', error);
    return NextResponse.json({ error: 'Email service connection failed.' }, { status: 500 });
  }

  try {
    console.log('Contact API: Sending email', {
      from: config.email.from.address,
      to: config.email.to,
      subject: `[${config.site.name} Contact] ${subject}`,
    });

    const info = await transporter.sendMail({
      from: `${config.email.from.name} <${config.email.from.address}>`,
      to: config.email.to,
      subject: `[${config.site.name} Contact] ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    console.log('Contact API: Email sent successfully', {
      messageId: info.messageId,
      response: info.response,
    });

    return NextResponse.json({ 
      success: true,
      messageId: info.messageId,
      response: info.response 
    });
  } catch (error) {
    console.error('Contact API: Failed to send email:', error);
    return NextResponse.json({ 
      error: 'Failed to send email.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 