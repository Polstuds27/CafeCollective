import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request){
    const {email} = await request.json();

    if(!email){
        return Response.json({error: "Email is required"}, {status: 400});
    }

    const supabase = await createClient();


    const {error} = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:3000/reset-password"
    });

    if(error){
        return Response.json({error: error.message}, {status: 400});
    }

    return Response.json({message: "Password reset email sent"});
}