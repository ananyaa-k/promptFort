import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://prdhclwhobcjrokfxeyi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByZGhjbHdob2JjanJva2Z4ZXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTgxOTMsImV4cCI6MjA2Njg3NDE5M30.i0bwGXtm1rqp4S_4u4fxJFv1DrU1wiOUFpiJG_Y0hiQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
