"use client"

import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";


export default function SignUpPage(){

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <Link href="/" className="text-2xl mb-4 text-[#c08b4b] font-bold">Cafe Collective</Link>

        <div className="flex flex-col w-[350px]  bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl pr-10 pl-10 pt-5 pb-5 items-center">
            <h1 className="text-xl font-semibold text-white mb-[3px]">Get Started</h1>
            <h2 className="text-sm mb-4">Sign Up with your google account.</h2>

            <button className="flex w-full justify-center gap-2 items-center cursor-pointer bg-[#c08b4b] text-black p-2 rounded-2xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                </svg>
                  Google
            </button>

            <div className="flex items-center gap-3 w-full mb-3">
              <div className="flex-1 h-px bg-[#c08b4b94]" />
              <span className="text-sm  font-light">Or continue with</span>
              <div className="flex-1 h-px bg-[#c08b4b94]" />
            </div>
   
            <form className="flex flex-col w-full gap-3">
            
              <span className="flex flex-col w-full gap-1">
                <label className="text-sm">
                  Username
                </label>
                <input
                  type="text"
                  className=" p-3 text-sm border-1 outline-none border-[#c08b4b94] bg-[#553028d5] rounded-2xl h-10"
                  placeholder="Username"
                />
              </span>
            
            
              <span className="flex flex-col w-full gap-1">
                <label className="text-sm">
                  Email
                </label>
                <input
                  type="text"
                  className=" p-3 border-1 text-sm outline-none border-[#c08b4b94] bg-[#553028d5] rounded-2xl h-10"
                  placeholder="Email"
                />
              </span>


              <span className="flex flex-col w-full gap-1">
                <label className="text-sm">
                  Password
                </label>

                <div className="relative">
                  <input
                  type={showPassword ? "text" : "password"}
                  className=" px-3 pr-10 w-full text-sm border-1 outline-none border-[#c08b4b94] bg-[#553028d5] rounded-2xl h-10"
                  placeholder="Password"
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
                  placeholder="Password"
                  />
                  <button 
                  type="button"
                  onClick={()=>{setShowConfirmPassword(prev=>!prev)}}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                    {showConfirmPassword ? <EyeClosed className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                  </button>
                </div>
              </span>

              <button className="flex w-full justify-center gap-2 items-center cursor-pointer bg-[#c08b4b] text-black p-2 rounded-2xl mb-2 mt-2">
                Sign Up
              </button>

              <p className="text-wrap text-center w-full text-xs">
                Already have an account? <Link href="/sign-in" className="underline text-[#c08b4b]">Sign in here.</Link>
                </p>       
            </form>

        </div>

        <span className="text-xs text-wrap items-center flex flex-wrap m-5">
          By joining, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-[#c08b4b] mx-1">Terms of Service</Link>
          and{" "}
          <Link href="/privacy" className="underline hover:text-[#c08b4b] mx-1">Privacy Policy.</Link>
          {" "}Let's keep the community respectful and helpful.
</span>

      </div>
    </>
  );
}
