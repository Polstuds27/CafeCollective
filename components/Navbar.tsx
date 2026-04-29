"use client"

import Link from "next/link"

export default function Navbar(){

    return(
        <>
            <nav className="flex w-full justify-between p-5 border-b-1 border-[#c08b4b94]">
                <Link href={"/"}>
                    <h1 className="text-2xl font-bold text-white">Cafe Collective</h1>
                </Link>

                <div className="flex gap-10 items-center">
                    <Link className="text-[14px]" href={"/#explore"}>Explore</Link>
                    <Link className=" text-[14px]" href={"/#community"}>Community</Link>
                    <Link className="text-[14px]" href={"/signin"}>Sign In</Link>
                    <Link className=" text-[14px] pr-4 pl-4 pt-1.5 pb-1.5 bg-[#c08b4b] text-black rounded-md" href={"/signup"}>Sign Up</Link>
                </div>
            </nav>
        </>
    );
}