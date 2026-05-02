"use client"

import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useState, useEffect } from "react";


export default function ResetPasswordPage(){

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState("");

  const hasUppercase = /[A-Z]/;
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const hasNumber = /[0-9]/;

  useEffect(()=>{
      if(confirmPassword === "") return;
  
       if (confirmPassword !== password) {
        setConfirmPasswordErrorMsg("Passwords do not match.")
      } else {
        setConfirmPasswordErrorMsg("")  
      }
    },[password, confirmPassword]);
  
    function checkPassword(password:string){
    
  
      if(password === "" || null){
        setPasswordErrorMsg("Please enter a password.");
      }else if(!hasUppercase.test(password) ||
        !hasSpecialChar.test(password) ||
        !hasNumber.test(password)
       ){
        setPasswordErrorMsg("Your password must atleast contain: 1 uppercase letter, 1 special character and 1 number.");
      }else if(password.length < 8){
        setPasswordErrorMsg("Your password must atleast be 8 characters long.");
      }else{
        setPasswordErrorMsg("");
      }
  
      setPassword(password);
  
    }
  
    function checkConfirmPassword(confirmPassword:string){
  
      if(confirmPassword === "" || null){
        setConfirmPasswordErrorMsg("Please enter a password.");
      }else{
        setConfirmPasswordErrorMsg("");
        
      }
  
      setConfirmPassword(confirmPassword);
    }


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
                
                <p className="text-xs text-[#E85D4A]">
                    {passwordErrorMsg}
                </p>
             
                <div className="relative">
                  <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e)=>{checkPassword(e.target.value)}}
                  className={`px-3 pr-10 w-full text-sm border-1 outline-none ${passwordErrorMsg === "" ? "border-[#c08b4b94]" : "border-[#E85D4A]" } bg-[#553028d5] rounded-2xl h-10`}
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

                <p className="text-xs text-[#E85D4A]">
                    {confirmPasswordErrorMsg}
                </p>

                <div className="relative">
                  <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e)=>{checkConfirmPassword(e.target.value)}}
                  className={`px-3 pr-10 w-full text-sm border-1 outline-none ${confirmPasswordErrorMsg === "" ? "border-[#c08b4b94]" : "border-[#E85D4A]" } bg-[#553028d5] rounded-2xl h-10`}
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
