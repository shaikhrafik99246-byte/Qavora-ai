
// QAVORA AI - Supabase Configuration

const SUPABASE_URL = "https://qdbvoiefuosrzsigykue.supabase.co";
const SUPABASE_KEY = "sb_publishable_D1rn0omiDS1oHm1MK91mOw_SSerghaZ";
  

window.qavoraSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

console.log("QAVORA Supabase Connected Successfully!");

