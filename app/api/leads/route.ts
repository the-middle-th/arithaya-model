import { NextResponse } from "next/server";

type LeadPayload = {
  formType?: "enterprise" | "contact";
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  position?: string;
  interested_program?: string;
  partnership_type?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && serviceRoleKey) {
    const table = payload.formType === "enterprise" ? "enterprise_leads" : "contact_leads";
    const body =
      table === "enterprise_leads"
        ? pick(payload, ["name", "organization", "position", "email", "phone", "interested_program", "message"])
        : pick(payload, ["name", "email", "phone", "organization", "partnership_type", "message"]);

    const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Lead could not be saved." }, { status: 502 });
    }
  }

  return NextResponse.json({
    ok: true,
    message: "Lead received."
  });
}

function pick(object: LeadPayload, keys: Array<keyof LeadPayload>) {
  return keys.reduce<Record<string, string>>((accumulator, key) => {
    const value = object[key];
    if (value !== undefined && value !== "") {
      accumulator[key] = value;
    }
    return accumulator;
  }, {});
}
