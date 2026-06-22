import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = Record<string, unknown> & {
  name?: string;
  email?: string;
  contact?: string;
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const contact = String(body.email ?? body.contact ?? "").trim();

  if (!name || !contact) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 422 },
    );
  }

  // Primary lead delivery happens client-side via WhatsApp deep link.
  // This endpoint is a best-effort server backup so no lead is silently lost.
  // TODO: wire up durable delivery (Resend / CRM webhook / Slack).
  console.info("[lead]", { ...body, name, contact, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
