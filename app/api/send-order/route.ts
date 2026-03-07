import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  driveLink?: string;
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, { count: number; resetAt: number }>();

export const runtime = "nodejs";

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

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return true;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(clientKey: string) {
  const now = Date.now();

  for (const [key, entry] of requestLog.entries()) {
    if (entry.resetAt <= now) {
      requestLog.delete(key);
    }
  }

  const current = requestLog.get(clientKey);

  if (!current || current.resetAt <= now) {
    requestLog.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  requestLog.set(clientKey, current);
  return false;
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  }

  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

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

    const email = typeof contactSource.email === "string" ? contactSource.email.trim() : "";
    if (email && !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const contact: ContactPayload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email || undefined,
      driveLink: typeof contactSource.driveLink === "string" ? contactSource.driveLink.trim() : undefined,
    };

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;
    const adminEmail = process.env.ORDER_NOTIFICATION_EMAIL ?? user;

    if (!user || !pass || !adminEmail) {
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

    await transporter.sendMail({
      from: `"Wedding Order" <${user}>`,
      to: adminEmail,
      replyTo: contact.email,
      subject: `[Đơn Hàng Mới] ${contact.name} - ${contact.phone}`,
      text: `
        Có đơn hàng làm thiệp mới!
        
        THÔNG TIN LIÊN HỆ:
        - Tên: ${contact.name}
        - SĐT/Zalo: ${contact.phone}
        - Email: ${contact.email || "Không có"}
        - Link ảnh: ${contact.driveLink || "Chưa có (sẽ gửi sau)"}
        
        THÔNG TIN ĐÁM CƯỚI:
        - Chú rể: ${groomShortName}
        - Cô dâu: ${brideShortName}
        - Ngày cưới: ${weddingDate}
        
        File config đính kèm bên dưới.
      `,
      attachments: [
        {
          filename: "config.json",
          content: JSON.stringify(configSource, null, 2),
        },
      ],
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
