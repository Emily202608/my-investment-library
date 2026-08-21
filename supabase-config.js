const SUPABASE_URL = "https://yoccgppagxphrycmjwev.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_8-h8AGm4bxuqPjIRrWLnQQ_HtWlHFcv";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);