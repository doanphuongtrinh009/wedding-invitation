import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  driveLink?: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getNestedString(
  source: Record<string, unknown>,
  firstKey: string,
  secondKey: string,
  thirdKey: string
): string {
  const first = source[firstKey];
  if (!isRecord(first)) return "Không có";

  const second = first[secondKey];
  if (!isRecord(second)) return "Không có";

  const value = second[thirdKey];
  return typeof value === "string" ? value : "Không có";
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!isRecord(body)) {
      return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
    }

    const contactSource = body.contact;
    const configSource = body.config;

    if (!isRecord(contactSource) || !isRecord(configSource)) {
      return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
    }

    const name = contactSource.name;
    const phone = contactSource.phone;
    if (typeof name !== "string" || typeof phone !== "string" || !name.trim() || !phone.trim()) {
      return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
    }

    const contact: ContactPayload = {
      name: name.trim(),
      phone: phone.trim(),
      email: typeof contactSource.email === "string" ? contactSource.email : undefined,
      driveLink: typeof contactSource.driveLink === "string" ? contactSource.driveLink : undefined,
    };

    const user = process.env.GMAIL_USER ?? process.env.NEXT_PUBLIC_GMAIL_USER;
    const pass = process.env.GMAIL_PASS ?? process.env.NEXT_PUBLIC_GMAIL_PASS;

    if (!user || !pass) {
      console.error("Missing env vars:", {
        user: Boolean(user),
        pass: Boolean(pass),
        env_user_exists: Boolean(process.env.NEXT_PUBLIC_GMAIL_USER),
        env_pass_exists: Boolean(process.env.NEXT_PUBLIC_GMAIL_PASS),
      });
      return NextResponse.json({ error: "Server misconfigured (missing credentials)" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const groomShortName = getNestedString(configSource, "couple", "groom", "shortName");
    const brideShortName = getNestedString(configSource, "couple", "bride", "shortName");
    const weddingDate = typeof configSource.weddingDate === "string" ? configSource.weddingDate : "Không có";

    const mailOptions = {
      from: `"Wedding Order" <${user}>`,
      to: "soju220799@gmail.com", // Admin email
      subject: `[Đơn Hàng Mới] ${contact.name} - ${contact.phone}`,
      text: `
        Có đơn hàng làm thiệp mới!
        
        THÔNG TIN LIÊN HỆ:
        - Tên: ${contact.name}
        - SĐT/Zalo: ${contact.phone}
        - Email: ${contact.email || "Không có"}
        - Link ảnh: ${contact.driveLink || "Chưa có (sẽ gửi Zalo sau)"}
        
        THÔNG TIN ĐÁM CƯỚI:
        - Chú rể: ${groomShortName}
        - Cô dâu: ${brideShortName}
        - Ngày cưới: ${weddingDate}
        
        File config đính kèm bên dưới.
      `,
      attachments: [
        {
          filename: "config.json",
          content: JSON.stringify(configSource, null, 4),
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
