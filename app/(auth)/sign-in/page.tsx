"use client"

import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";


export default function SignInPage(){

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(""); 

  function checkEmail(email:string){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
      setEmailErrorMsg("Please enter your email.");
    }else if(!regex.test(email)){
      setEmailErrorMsg("Invalid email.");
    }else{
      setEmailErrorMsg("");
    }

    setEmail(email);
  }

  function checkPassword(password:string){
    
    if(password === ""){
      setPasswordErrorMsg("Please enter you password.");
    }else{
      setPasswordErrorMsg("");
    }

    setPassword(password)
  }


  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <Link href="/" className="text-2xl mb-4 text-[#c08b4b] font-bold">Cafe Collective</Link>

        <div className="flex flex-col w-[350px] bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl pr-10 pl-10 pt-5 pb-5 items-center">
            <h1 className="text-xl font-semibold text-white mb-[3px]">Welcome Back</h1>
            <h2 className="text-xs mb-4 ">Good to see you again. Your next café awaits</h2>

                    
            <form className="flex flex-col w-full gap-3">
              <span className="flex flex-col w-full gap-1">
                <label className="text-sm">
                  Email
                </label>

                  <p className="text-xs text-[#E85D4A]">
                    {emailErrorMsg}
                  </p>

                <input
                  type="text"
                  onChange={(e)=>{checkEmail(e.target.value)}}
                  value={email}
                  className={`p-3 text-sm border-1 outline-none ${emailErrorMsg === "" ? "border-[#c08b4b94]": "border-[#E85D4A]"} bg-[#553028d5] rounded-2xl h-10`}
                  placeholder="Email"
                />
              </span>

              <span className="flex flex-col w-full gap-1">
                <label className="text-sm">
                  Password
                </label>

                <p className="text-xs text-[#E85D4A]">
                    {passwordErrorMsg}
                </p>

                <div className="relative">
                  <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e)=>{checkPassword(e.target.value)}}
                  className={`px-3 pr-10 w-full text-sm border-1 outline-none ${passwordErrorMsg === "" ? "border-[#c08b4b94]" : "border-[#E85D4A]" } bg-[#553028d5] rounded-2xl h-10`}
                  placeholder="Password"
                  />
                  <button 
                  type="button"
                  onClick={()=>{setShowPassword(prev=>!prev)}}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                    {showPassword ? <EyeClosed className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
                  </button>
                </div>
                  <Link href="/forgot-password" className="text-xs text-end mt-1 hover:underline hover:text-[#c08b4b] cursor-pointer">Forgot Password?</Link>
              </span>

              <button className="flex w-full justify-center gap-2 items-center cursor-pointer bg-[#c08b4b] text-black p-2 rounded-2xl mb-2">
                Sign In
              </button>
       
            </form>

            <div className="flex items-center gap-3 w-full mb-3">
              <div className="flex-1 h-px bg-[#c08b4b94]" />
              <span className="text-xs  font-light">Or continue with</span>
             <div className="flex-1 h-px bg-[#c08b4b94]" />
            </div>
            
            <button className="flex w-full justify-center gap-2 items-center cursor-pointer bg-[#c08b4b] text-black p-2 rounded-2xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                </svg>
                  Google
            </button>

              <p className="text-wrap text-center w-full text-xs">
                Don't have an account yet? <Link href="/sign-up" className="underline text-[#c08b4b]">Register here.</Link>
              </p>
            
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
