import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://odxpdiumbfocpbeupnuk.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9keHBkaXVtYmZvY3BiZXVwbnVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMjQxMTEsImV4cCI6MjAyMjkwMDExMX0.vMm7rzfbGED4m1LUUBhtIbnfkNI4WPktWvLAK3SckWg";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
    db: {
        schema: "public",
    },
    auth: {
      persistSession: true,

    },
});