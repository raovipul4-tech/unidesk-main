import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, subject, message, type } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email body based on form type
    let emailSubject = '';
    let emailBody = '';

    if (type === 'contact') {
      emailSubject = `New Contact Form Submission: ${subject || 'General Inquiry'}`;
      emailBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
    } else if (type === 'demo') {
      const productMap: { [key: string]: string } = {
        unicrm: 'Unidesk CRM',
        unichat: 'UniChat WhatsApp API',
        both: 'Unidesk + UniChat (Both Products)',
      };
      const productName = productMap[body.product] || body.product;

      emailSubject = `New Demo Request: ${productName}`;
      emailBody = `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Interested Product:</strong> ${productName}</p>
        <p><strong>Requirements:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
    }

    // Send email to info@unidesk.in
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@unidesk.in',
      subject: emailSubject,
      html: emailBody,
      replyTo: email, // Set reply-to as the user's email
    });

    // Optional: Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - Unidesk',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${firstName},</p>
        <p>We've received your message and our team will get back to you within 2 hours during business hours.</p>
        <p>In the meantime, feel free to explore more about our products at <a href="https://unidesk.in">unidesk.in</a></p>
        <p>Best regards,<br>The Unidesk Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
