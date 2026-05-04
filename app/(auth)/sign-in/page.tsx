"use client"

import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";


export default function SignInPage(){

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(""); 

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  async function handleSignIn(){
    setLoading(false);
    setError("");
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if(error){
      setError(error.message);
      console.log(error.message);
      setEmailErrorMsg(error.message);
      setPasswordErrorMsg(" ");
    }else{
      router.replace("/home");
    }

    setLoading(false);
  }


  function checkEmail(email:string){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(false);
    if(email === ""){
      setEmailErrorMsg("Please enter your email.");
    }else if(!regex.test(email)){
      setEmailErrorMsg("Invalid email.");
    }else{
      setEmailErrorMsg("");
      setIsValidEmail(true);
    }

    setEmail(email);
  }

  function checkPassword(password:string){
    
    setIsValidPassword(false);
    if(password === ""){
      setPasswordErrorMsg("Please enter you password.");
    }else{
      setPasswordErrorMsg("");
      setIsValidPassword(true);
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
                <span className="flex justify-end w-full ">
                  <Link href="/forgot-password" className="text-xs mt-1 hover:underline hover:text-[#c08b4b] cursor-pointer">Forgot Password?</Link>
                </span>
              </span>

              <button 
                type="button"
                onClick={handleSignIn}
                disabled={loading}
                className="flex w-full justify-center gap-2 items-center cursor-pointer bg-[#c08b4b] text-black p-2 rounded-2xl mb-2">
                {loading ? "Signing in..." : "Sign In"}
              </button>
       
            </form>

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
