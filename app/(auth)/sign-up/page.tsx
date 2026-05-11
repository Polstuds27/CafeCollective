"use client"

import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import SuccessSignUpCard from "@/components/SuccessSignUpCard";

export default function SignUpPage(){

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();
  const [isSuccessful, setIsSuccessful] = useState(false);

  const hasUppercase = /[A-Z]/;
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const hasNumber = /[0-9]/;

  async function handleSignUp() {
    setLoading(true);
    setError("");
    setIsSuccessful(false);


    if(isValidEmail && isValidPassword){
      const res = await fetch("http://localhost:3000/api/auth/sign-up",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email: email,
          password: password,
          username: username
        }),
      });

      const data = await res.json()

      if(data.error){
        setError(data.error);
        setUsernameErrorMsg(data.error);
        setPasswordErrorMsg(" ");
        setConfirmPasswordErrorMsg(" ");
        setEmailErrorMsg(" ");
      }else{
        setIsSuccessful(true);  
      }

      setLoading(false);
    }
    
  }

  function checkEmail(email:string){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(false);

    if(email === "" || null){
      setEmailErrorMsg("Please enter your email.");
    }else if(!regex.test(email)){
      setEmailErrorMsg("Invalid email");
    }else{
      setEmailErrorMsg("");
      setIsValidEmail(true);
    }

    setEmail(email);
  }

  function checkUsername(username:string){
    if(username === ""){
      setUsernameErrorMsg("Please enter a username.");
    }else{
      setUsernameErrorMsg("");
    }

    setUsername(username);
  }


  useEffect(()=>{
    if(confirmPassword === "") return;

     if (confirmPassword !== password) {
      setConfirmPasswordErrorMsg("Passwords do not match.")
    } else {
      setConfirmPasswordErrorMsg("")  
    }
  },[password, confirmPassword]);

  function checkPassword(password:string){
  
    setIsValidPassword(false);
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
      setIsValidPassword(true);
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


  if(isSuccessful){
    return( 
      <div className="w-full h-full flex flex-col items-center">
        <Link href="/" className="text-2xl mb-4 text-[#c08b4b] font-bold">Cafe Collective</Link>

        <SuccessSignUpCard/>
      </div>
    )
  }else{
    return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <Link href="/" className="text-2xl mb-4 text-[#c08b4b] font-bold">Cafe Collective</Link>

        <div className="flex flex-col w-[350px]  bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl pr-10 pl-10 pt-5 pb-5 items-center">
            <h1 className="text-xl font-semibold text-white mb-[3px]">Join the Community</h1>
            <h2 className="text-xs mb-4">Discover, review, and share great coffee spots.</h2>
   
            <form className="flex flex-col w-full gap-3">
            
              <span className="flex flex-col w-full gap-1">
                <label className="text-sm">
                  Username
                </label>

                <p className="text-xs text-[#E85D4A]">
                  {usernameErrorMsg}
                </p>
                <input
                  type="text"
                  value={username}
                  onChange={(e)=>{checkUsername(e.target.value)}}
                  className={`p-3 text-sm border-1 outline-none ${usernameErrorMsg === "" ? "border-[#c08b4b94]": "border-[#E85D4A]"} bg-[#553028d5] rounded-2xl h-10`}
                  placeholder="Username"
                />
              </span>
            
            
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
                  className={`px-3 pr-10 w-full text-sm border-1 outline-none ${confirmPasswordErrorMsg === "" ? "border-[#c08b4b94]" : "border-[#E85D4A]"} bg-[#553028d5] rounded-2xl h-10`}
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

              <button
                type="button" 
                onClick={handleSignUp}
                disabled={loading}
                className="flex w-full justify-center gap-2 items-center cursor-pointer bg-[#c08b4b] text-black p-2 rounded-2xl mb-2 mt-2">
                 {loading ? "Creating account..." : "Sign Up"}
              </button>

              
       
            </form>


              <p className="text-wrap text-center w-full text-xs">
                Already have an account? <Link href="/sign-in" className="underline text-[#c08b4b]">Sign in here.</Link>
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
  
}
