import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting: max 5 requests per 10 minutes per IP
interface RateLimitEntry {
  count: number;
  firstRequestTime: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean up expired entries periodically
  if (rateLimitMap.size > 500) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now - val.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!entry || now - entry.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction & rate limit check
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many inquiries submitted from your network. Please wait a few minutes or contact info@nelskraft.com directly.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const {
      name,
      company,
      email,
      phone,
      category,
      product,
      message,
      _hp, // Honeypot field
    } = body;

    // 3. Honeypot spam check: if filled, reject silently
    if (_hp && String(_hp).trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam submission rejected." },
        { status: 400 }
      );
    }

    // 4. Server-side validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedCompany = typeof company === "string" ? company.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const trimmedCategory = typeof category === "string" ? category.trim() : "General Enquiry";
    const trimmedProduct = typeof product === "string" ? product.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (max 100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 120) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!trimmedPhone || trimmedPhone.length < 8 || trimmedPhone.length > 30) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid contact phone number." },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Please provide requirement details (max 5000 characters)." },
        { status: 400 }
      );
    }

    // 5. Check Email Provider Credentials
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Do not pretend an inquiry was sent if backend is not configured
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is not yet configured with an API key (RESEND_API_KEY). Please add your API key to environment variables or email info@nelskraft.com directly.",
        },
        { status: 503 }
      );
    }

    const toEmail = process.env.CONTACT_FORM_TO_EMAIL || "info@nelskraft.com";
    const fromEmail =
      process.env.CONTACT_FORM_FROM_EMAIL ||
      "Nelskraft Inquiries <onboarding@resend.dev>";

    const subject = `Industrial Inquiry: ${trimmedCategory} - ${trimmedName}${
      trimmedCompany ? ` (${trimmedCompany})` : ""
    }`;

    // Plain text content fallback
    const textContent = [
      `=== NEW INQUIRY - NELSKRAFT REFRACTORY PVT. LTD. ===`,
      ``,
      `Full Name:          ${trimmedName}`,
      `Company Name:       ${trimmedCompany || "N/A"}`,
      `Email Address:      ${trimmedEmail}`,
      `Phone Number:       ${trimmedPhone}`,
      `Product Category:   ${trimmedCategory}`,
      `Product/Material:   ${trimmedProduct || "General Inquiry"}`,
      ``,
      `Requirement Details:`,
      `${trimmedMessage}`,
      ``,
      `Submitted At:       ${new Date().toISOString()}`,
      `Sender IP:          ${ip}`,
      `Reply directly to:  ${trimmedEmail}`,
    ].join("\n");

    // HTML Email Template matching Nelskraft brand
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Industrial Inquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5ee; margin: 0; padding: 24px 12px; color: #1c261b;">
  <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e0d5; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);">
    
    <!-- Header Banner -->
    <div style="background-color: #121c17; color: #ffffff; padding: 24px 28px; border-bottom: 3px solid #54a937;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #ffffff;">
        NELSKRAFT <span style="color: #78c454; font-size: 13px; font-weight: 600; display: block; margin-top: 4px; letter-spacing: 0.12em;">REFRACTORY PVT. LTD.</span>
      </h1>
      <p style="margin: 8px 0 0; font-size: 13px; color: #b4c2ba;">
        New Technical &amp; Material Inquiry Received via Website Form
      </p>
    </div>

    <!-- Main Content -->
    <div style="padding: 28px;">
      
      <!-- Summary Callout -->
      <div style="background-color: #fbfbfa; border-left: 4px solid #445e3d; padding: 14px 18px; margin-bottom: 24px; border-radius: 4px;">
        <p style="margin: 0; font-size: 13px; color: #3a4538; font-weight: 600;">
          Category: <span style="color: #1c261b; font-weight: 700;">${escapeHtml(trimmedCategory)}</span>
        </p>
        ${
          trimmedProduct
            ? `<p style="margin: 4px 0 0; font-size: 13px; color: #3a4538;">Material / Spec: <strong>${escapeHtml(
                trimmedProduct
              )}</strong></p>`
            : ""
        }
      </div>

      <!-- Visitor Details Table -->
      <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; margin-bottom: 24px;">
        <tbody>
          <tr style="border-bottom: 1px solid #f0eee8;">
            <td style="padding: 10px 0; color: #6e776b; width: 140px; font-weight: 600;">Full Name:</td>
            <td style="padding: 10px 0; color: #1c261b; font-weight: 700;">${escapeHtml(trimmedName)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0eee8;">
            <td style="padding: 10px 0; color: #6e776b; font-weight: 600;">Company:</td>
            <td style="padding: 10px 0; color: #1c261b;">${escapeHtml(trimmedCompany || "Not specified")}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0eee8;">
            <td style="padding: 10px 0; color: #6e776b; font-weight: 600;">Email Address:</td>
            <td style="padding: 10px 0; color: #1c261b;">
              <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #2d6b1f; text-decoration: none; font-weight: 600;">
                ${escapeHtml(trimmedEmail)}
              </a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f0eee8;">
            <td style="padding: 10px 0; color: #6e776b; font-weight: 600;">Phone Number:</td>
            <td style="padding: 10px 0; color: #1c261b;">
              <a href="tel:${escapeHtml(trimmedPhone)}" style="color: #2d6b1f; text-decoration: none; font-weight: 600;">
                ${escapeHtml(trimmedPhone)}
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Message Requirement Box -->
      <div style="margin-bottom: 28px;">
        <h3 style="margin: 0 0 10px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #445e3d;">
          Requirement Details:
        </h3>
        <div style="background-color: #faf9f6; border: 1px solid #e8e6df; border-radius: 8px; padding: 16px 18px; font-size: 14px; line-height: 1.6; color: #202522; white-space: pre-wrap;">
${escapeHtml(trimmedMessage)}
        </div>
      </div>

      <!-- Quick Action: Reply Button -->
      <div style="text-align: center; margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e0d5;">
        <a href="mailto:${escapeHtml(trimmedEmail)}?subject=Re:%20${encodeURIComponent(subject)}"
           style="display: inline-block; background-color: #445e3d; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; padding: 12px 28px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.08em;">
          Reply to ${escapeHtml(trimmedName)}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f7f5ee; border-top: 1px solid #e5e0d5; padding: 14px 28px; text-align: center; font-size: 11px; color: #7a8277;">
      This email was delivered by the official website contact form at <a href="https://www.nelskraft.com" style="color: #54a937; text-decoration: none;">nelskraft.com</a>.
      Target recipient: <strong>${escapeHtml(toEmail)}</strong>
    </div>

  </div>
</body>
</html>
    `.trim();

    // 6. Send email via Resend
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: trimmedEmail,
      subject: subject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      // Do not log sensitive inquiry content
      console.error("[Contact API] Resend dispatch error:", error.message || error);
      return NextResponse.json(
        {
          success: false,
          error:
            error.message ||
            "The email delivery provider encountered an error while sending your message. Please try again or reach us at info@nelskraft.com.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully delivered.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    console.error("[Contact API] Unexpected error:", errorMsg);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again later or contact info@nelskraft.com directly.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
