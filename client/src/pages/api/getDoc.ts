
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import { NextApiHandler, NextApiResponse } from "next";

const supabase_admin_key:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydHVraXljbHJmbmtkbGN1cml0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjI5OTEyNCwiZXhwIjoxOTgxODc1MTI0fQ.p3uU2C-DM3MIg26b-uArmoXWrHHIduWbtTzv5IjGoII'
const supabase_url:string = 'https://ertukiyclrfnkdlcurit.supabase.co'

const supabase = createClient(supabase_url, supabase_admin_key);

type Doc = {
    id: number
    user_id: string
    created_at: string 
    text: string
    title: string
  }
  

module.exports = async(req:any,res:any) => {
    const { data, status}  = await supabase.from("docs").select("*")
    console.log(status)
    if(status != 200){
        res.status(status).json('Error occured trying to get to supabase')
        return
    }
    res.status(200).json(data)
}
