import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request){

    const {
        username,
        email,
        password,
    } = await request.json();

    if (!username || !email || !password) {
        return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    const supabase = await createClient();

    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{
                username
            },
            emailRedirectTo: "http://localhost:3000/sign-in"
        }
    });

    if(error){
        return Response.json({error: error.message}, {status: 400});
    }

    return Response.json({user: data.user});

}