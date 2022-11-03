
import { createClient } from "@supabase/supabase-js";
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
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    console.log(req.body.title)
    //const body = JSON.parse(req.body)
    const {data,error} = await supabase.from('docs').insert([
        { 
                text: req.body.text,
                title: req.body.title
        },
        ])
        
    if(error != null){
        console.log(error)
        res.status(500).json(error)
    }
    res.status(200).json('Doc Created')
}

