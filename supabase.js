const SUPABASE_URL = "PASTE_PROJECT_URL_HERE";
const SUPABASE_KEY = "PASTE_PUBLISHABLE_KEY_HERE";

window.qavoraSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("QAVORA connected!");
