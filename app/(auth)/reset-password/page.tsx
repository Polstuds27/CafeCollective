"use client"

import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";


export default function ForgotPasswordPage(){

  const [showPassword, setShowPassword] = useState(false);


  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <Link href="/" className="text-2xl mb-4 text-[#c08b4b] font-bold">Cafe Collective</Link>

        <div className="flex flex-col w-[350px] bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl pr-10 pl-10 pt-5 pb-5 items-center">
            <h1 className="text-xl font-semibold text-white mb-[3px]">No worries, it happens.</h1>
            <h2 className="text-xs mb-4 text-center">Enter your email and we'll send you a reset link.</h2>

                    
            <form className="flex flex-col w-full gap-3">
              <span className="flex flex-col w-full gap-1">
                <label className="text-sm">
                  Email
                </label>
                <input
                  type="text"
                  className=" p-3 text-sm border-1 outline-none border-[#c08b4b94] bg-[#553028d5] rounded-2xl h-10"
                  placeholder="Email"
                />
              </span>

              <button className="flex w-full justify-center gap-2 items-center cursor-pointer bg-[#c08b4b] text-black p-2 rounded-2xl mb-2">
                Next
              </button>
       
            </form>

              <p className="text-wrap text-center w-full text-xs">
                Remember it now? <Link href="/sign-in" className="underline text-[#c08b4b]">Sign In here.</Link>
              </p>
            
        </div>

      </div>
    </>
  );
}
