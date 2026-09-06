import { createClient } from "@supabase/supabase-js";

// Not called anywhere yet — lib/data.ts currently reads local sample data.
// Once NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are set in
// .env.local, import this client inside lib/data.ts to switch each function
// over one at a time. See supabase/schema.sql for the matching tables.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
);
