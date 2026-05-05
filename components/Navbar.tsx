

import Link from "next/link"
import { createClient } from "@/lib/supabase/server";

import SignOutButton from "./SignOutButton";


export default async function Navbar(){

    const supabase = await createClient();
    const {data: {user} } = await supabase.auth.getUser();


    return(
    <>
        <nav className="flex w-full justify-between p-5 border-b-1 border-[#c08b4b94]">
            <Link href={"/"}>
                <h1 className="text-2xl font-bold text-white">Cafe Collective</h1>
            </Link>

            <div className="flex gap-8 items-center">

                {user ? (
                    <>
                    <Link className="text-[14px]" href={"/cafes"}>Explore Cafes</Link>
                    <Link className=" text-[14px]" href={"/community"}>Community</Link>
                    <Link href={"/profile"}>
                        <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJF0Uvv9lCJRCyg769IPZod9CvsezdzXBn_Q&s" alt="" />
                    </Link>
                    <SignOutButton/>
                    </>

                ) : (
                    <>
                    <Link className="text-[14px]" href={"/#explore"}>Explore</Link>
                    <Link className=" text-[14px]" href={"/#community"}>Community</Link>
                    <Link className="text-[14px]" href={"/sign-in"}>Sign In</Link>
                    <Link className=" text-[14px] pr-4 pl-4 pt-1.5 pb-1.5 bg-[#c08b4b] text-black rounded-md" href={"/sign-up"}>Sign Up</Link>    
                    </>
                )}
                
                
            </div>
        </nav>
    </>
    );
        
}