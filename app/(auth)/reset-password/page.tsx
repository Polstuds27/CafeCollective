"use client"

import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";


export default function ResetPasswordPage(){

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <Link href="/" className="text-2xl mb-4 text-[#c08b4b] font-bold">Cafe Collective</Link>

        <div className="flex flex-col w-[350px] bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl pr-10 pl-10 pt-5 pb-5 items-center">
            <h1 className="text-xl font-semibold text-white mb-[3px]">Almost there.</h1>
            <h2 className="text-xs mb-4 text-center">Enter your new password below and you're all set.</h2>

                    
            <form className="flex flex-col w-full gap-3">

              <span className="flex flex-col w-full gap-1">
                <label className="text-sm">
                New Password
                </label>

                <div className="relative">
                  <input
                  type={showPassword ? "text" : "password"}
                  className=" px-3 pr-10 w-full text-sm border-1 outline-none border-[#c08b4b94] bg-[#553028d5] rounded-2xl h-10"
                  placeholder="New Password"
                  />
                  <button 
                  type="button"
                  onClick={()=>{setShowPassword(prev=>!prev)}}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                    {showPassword ? <EyeClosed className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                  </button>
                </div>
              </span>

              <span className="flex flex-col w-full gap-1">
                <label className="text-sm">
                Confirm Password
                </label>

                <div className="relative">
                  <input
                  type={showConfirmPassword ? "text" : "password"}
                  className=" px-3 pr-10 w-full text-sm border-1 outline-none border-[#c08b4b94] bg-[#553028d5] rounded-2xl h-10"
                  placeholder="Confirm Password"
                  />
                  <button 
                  type="button"
                  onClick={()=>{setShowConfirmPassword(prev=>!prev)}}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                    {showConfirmPassword ? <EyeClosed className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                  </button>
                </div>
              </span>

              <button className="flex w-full justify-center gap-2 items-center cursor-pointer bg-[#c08b4b] text-black p-2 rounded-2xl mb-2 mt-1">
                Reset Password
              </button>
       
            </form>

        </div>

      </div>
    </>
  );
}
