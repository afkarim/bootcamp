import { createClient } from "@supabase/supabase-js";

const supabase_admin_key:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydHVraXljbHJmbmtkbGN1cml0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjI5OTEyNCwiZXhwIjoxOTgxODc1MTI0fQ.p3uU2C-DM3MIg26b-uArmoXWrHHIduWbtTzv5IjGoII'
const supabase_url:string = 'https://ertukiyclrfnkdlcurit.supabase.co'

const supabase = createClient(supabase_url, supabase_admin_key);

module.exports = async(req,res) => {
    const {data: }
}