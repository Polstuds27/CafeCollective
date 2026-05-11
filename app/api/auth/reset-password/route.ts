import { createClient } from "@/lib/supabase/server";


export async function POST(request: Request){
    const {password} = await request.json();

    if(!password){
        return Response.json({error: "Password is needed"}, {status:400});
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.updateUser({password});

    if(error){
        return Response.json({error: error.message}, {status: 400});
    }

    return Response.json({message: "Password updated successfully!"});
}