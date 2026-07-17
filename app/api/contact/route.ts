// Contact form endpoint. Validates the payload and logs it server-side.
// Wiring to real email/CRM delivery (e.g. Resend, SMTP, a database) is a
// follow-up once credentials exist — see docs/CONTENT.md.

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  const errors: string[] = [];
  if (!name) errors.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("email");
  if (!message) errors.push("message");

  if (errors.length) {
    return Response.json(
      { error: `Please provide a valid ${errors.join(", ")}.` },
      { status: 422 }
    );
  }

  // TODO: deliver to inbox/CRM. For now, record the enquiry.
  console.log("[contact] new enquiry", { name, email, message });

  return Response.json({ ok: true });
}
