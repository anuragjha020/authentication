import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jskmyifwrfiygaotlijs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impza215aWZ3cmZpeWdhb3RsaWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyNTI2NjcsImV4cCI6MjA0NzgyODY2N30.dvzOCyuLyqZBGcrcecMwQe-3teO9MgHCbui6d6Kohg4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
