import { NextRequest, NextResponse } from "next/server";

// This currently just validates and logs the inquiry. To persist real
// inquiries, insert into the `inquiries` table from supabase/schema.sql:
//
//   import { supabase } from "@/lib/supabase";
//   await supabase.from("inquiries").insert({ ...mapped fields... });
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.name || !body.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  console.log("New inquiry received:", body);

  return NextResponse.json({ ok: true });
}
