// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();
        
        // Validate inputs
        if (!name || !email || !subject || !message) {
            return NextResponse.json({
                success: false,
                message: 'Missing required fields',
            }, {
                status: 400,
            });
        }
        
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        
        const to = process.env.RECIPIENT_EMAIL || "sudhachandran601@gmail.com";
        
        // Simple sanitization - convert special characters to HTML entities
        const sanitize = (str: string) => String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
        
        await transporter.sendMail({
            from: `"${sanitize(name)}" <${email}>`,
            to,
            subject: sanitize(subject),
            html: `
            <div>
              <h2>New Message from Portfolio Contact Form</h2>
              <p><strong>From:</strong> ${sanitize(name)} (${email})</p>
              <p><strong>Subject:</strong> ${sanitize(subject)}</p>
              <div>
                <strong>Message:</strong>
                <p>${sanitize(message).replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            `,
        });
        
        return NextResponse.json({
            success: true,
            message: 'Email sent successfully'
        }, {
            status: 200,
        });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : 'Failed to send email'
        }, {
            status: 500,
        });
    }
}