"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer(){

    const [footerDisabled, setFooterDisabled] = useState(false);
    const pathName = usePathname();

    useEffect(()=>{
        if(pathName === "/sign-in" || pathName === "/sign-up"){
            setFooterDisabled(true); 
        }else{
            setFooterDisabled(false);
        }
    },[pathName]);
    
    if(footerDisabled) return null;

     return(
        <>
            <footer className="flex w-full justify-between pt-5 pb-7 pr-5 pl-5 border-t-1 border-[#c08b4b94]">
                <p className="text-[#77746c] text-xs font-light">© 2025 Cafe Collective</p>

                <span className="flex items-center gap-5">
                    <Link href="/" className="text-[#77746c] text-xs font-light">About</Link>
                    <Link href="/" className="text-[#77746c] text-xs font-light">Privacy</Link>
                    <Link href="/" className="text-[#77746c] text-xs font-light">Contact</Link>
                </span>
            </footer>
        </>
        );
        
}