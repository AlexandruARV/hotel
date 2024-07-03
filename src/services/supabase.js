import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xrcydmupnikpvatfpnnp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyY3lkbXVwbmlrcHZhdGZwbm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2ODQ5MTYsImV4cCI6MjAzNTI2MDkxNn0.n2BzdavKhQSsmH1QocR_L-x3UMM44BGS6uKVZ0n3iko";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
