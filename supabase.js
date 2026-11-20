const SUPABASE_URL = "https://qdbvoiefuosrzsigykue.supabase.co";
const SUPABASE_KEY = "sb_publishable_D1rn0omiDS1oHm1MK91mOw_SSerghaZ";const SUPABASE_URL = "https://qdbvoiefuosrzsigykue.supabase.co";



if (!window.supabase) {
  console.error("Supabase library not loaded!");
} else {
  window.qavoraSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

  console.log("QAVORA Supabase connected!");
}
