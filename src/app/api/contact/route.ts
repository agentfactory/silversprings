import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || "denis@theagentfactory.ai";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Silver Springs <noreply@silverspringstudio.com>";

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Record<string, string>;

    if (!data.email || !data.name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const subject = `Silver Springs — ${data.topic || "Contact"}: ${data.name}`;
    const lines = Object.entries(data)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    if (!resendApiKey) {
      // Dev mode — log and succeed. TODO(denis): set RESEND_API_KEY on Railway.
      console.log("[contact] (no RESEND_API_KEY)", subject, "\n", lines);
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(resendApiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject,
      text: lines,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
