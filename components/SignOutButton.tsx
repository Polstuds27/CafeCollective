"use client"
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignOutButton(){
    
    const supabase = createClient();
    const router = useRouter();
    
    
    async function handleSignOut(){
        await supabase.auth.signOut();
        router.replace("/");
        router.refresh();
    }
    
    return(
        <button
        onClick={handleSignOut}
        className=" text-[14px] pr-4 pl-4 pt-1.5 pb-1.5 bg-[#c08b4b] text-black rounded-md cursor-pointer"  
        >
            Sign Out
        </button>
    )
}