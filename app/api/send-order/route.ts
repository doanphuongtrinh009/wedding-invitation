
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { contact, config } = body;

        // Validate
        if (!contact || !contact.name || !contact.phone) {
            return NextResponse.json({ error: 'Missing contact info' }, { status: 400 });
        }

        // Check for environment variables
        if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
            console.error('Missing env vars:', {
                user: !!process.env.GMAIL_USER,
                pass: !!process.env.GMAIL_PASS
            });
            return NextResponse.json({ error: 'Server misconfigured (missing credentials)' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Wedding Order" <${process.env.GMAIL_USER}>`,
            to: 'soju220799@gmail.com', // Admin email
            subject: `[Đơn Hàng Mới] ${contact.name} - ${contact.phone}`,
            text: `
        Có đơn hàng làm thiệp mới!
        
        THÔNG TIN LIÊN HỆ:
        - Tên: ${contact.name}
        - SĐT/Zalo: ${contact.phone}
        - Email: ${contact.email || 'Không có'}
        - Link ảnh: ${contact.driveLink || 'Chưa có (sẽ gửi Zalo sau)'}
        
        THÔNG TIN ĐÁM CƯỚI:
        - Chú rể: ${config.couple.groom.shortName}
        - Cô dâu: ${config.couple.bride.shortName}
        - Ngày cưới: ${config.weddingDate}
        
        File config đính kèm bên dưới.
      `,
            attachments: [
                {
                    filename: 'config.json',
                    content: JSON.stringify(config, null, 4),
                },
            ],
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
