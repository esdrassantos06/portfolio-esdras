"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

export type ContactResult =
  | { ok: true }
  | {
      ok: false;
      error:
        "rate_limited" | "invalid_fields" | "not_configured" | "send_failed";
    };

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

/**
 * Validates and emails a contact message. Rate limited per IP, in memory.
 */
export async function sendContact(input: ContactInput): Promise<ContactResult> {
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return { ok: false, error: "rate_limited" };
  }

  if (input.company) {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "invalid_fields" };
  }
  const { name, email, message } = parsed.data;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } =
    process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return { ok: false, error: "not_configured" };
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `New contact message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch {
    return { ok: false, error: "send_failed" };
  }

  return { ok: true };
}
