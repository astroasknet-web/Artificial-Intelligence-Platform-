import { NextResponse } from "next/server";
import { INTERESTS } from "@/lib/ai/content";

export const runtime = "nodejs";

/**
 * POST /api/demo: a demo request from /book.
 * Delivery: Resend when RESEND_API_KEY and DEMO_TO are set. Without them a development server logs the request;
 * a production server refuses (503) rather than telling a visitor "sent" when nothing was.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (clean(body.website, 50)) return NextResponse.json({ ok: true }); // honeypot

  const name = clean(body.name, 80);
  const email = clean(body.email, 120).toLowerCase();
  const phone = clean(body.phone, 30);
  const company = clean(body.company, 100);
  const interest = clean(body.interest, 60);
  const message = typeof body.message === "string" ? body.message.replace(/\r\n/g, "\n").trim().slice(0, 4000) : "";

  if (name.length < 2) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (message.length < 20) return NextResponse.json({ error: "Please tell us a little more (at least 20 characters)." }, { status: 400 });
  if (!INTERESTS.includes(interest)) return NextResponse.json({ error: "Please pick from the list." }, { status: 400 });

  const subject = `Demo request: ${interest} from ${name}`;
  const lines = [`Name: ${name}`, `Email: ${email}`];
  if (phone) lines.push(`Phone: ${phone}`);
  if (company) lines.push(`Company: ${company}`);
  lines.push(`Interested in: ${interest}`, "", message);
  const text = lines.join("\n");

  const key = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_TO;
  if (!key || !to) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Our inbox is not connected right now. Please try again later." }, { status: 503 });
    }
    console.log(`[demo] (not emailed: RESEND_API_KEY / DEMO_TO not set)\n${subject}\n${text}`);
    return NextResponse.json({ ok: true });
  }

  const from = process.env.DEMO_FROM ?? "Yugty.AI <onboarding@resend.dev>";
  const html = `<p><b>${esc(name)}</b> &lt;${esc(email)}&gt;${phone ? ` · ${esc(phone)}` : ""}${company ? ` · ${esc(company)}` : ""}</p><p>Interested in: ${esc(interest)}</p><p style="white-space:pre-wrap">${esc(message)}</p>`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: to.split(",").map((s) => s.trim()), reply_to: email, subject, html, text }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}`);
  } catch (e) {
    console.error("[demo] delivery failed", e);
    return NextResponse.json({ error: "We could not send your request just now. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
