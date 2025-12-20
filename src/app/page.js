'use client'
// Main Home page component with state management and navigation
// It is the entry point of the application.
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {

  const [name,setName] = useState("Farhan");
  const router = useRouter();
  const navigate = (route)=>{
    router.push(route);
  }

  const who = (props)=>{
    alert(props)
    setName("Farhan Hussain")
  }

  const InnerComp = ()=>{
    return(
      <div>
        <h1>Inner Component in Parent Component
        </h1>
      </div>
    )
  }

  return (
    <div>
    <div className="flex h-50 justify-center items-center bg-orange-200">
      <h1 className="w-50 text-center text-white border-2 bg-blue-300 border-amber-300 rounded-2xl">Your Page || {name}</h1>
     </div>
      <User name="Farhan Hussain"/>
      <User name="Kaif Hussain"/>
      <User name="Jihan Hussain"/>
    {/* Static button  */}
      <button className="bg-blue-400 text-white border-amber-200 rounded-3xl w-20" onClick={()=>alert("Just click the button")}>Click</button>
    {/* Dynamic Button with State */}
      <button className="bg-rose-400 text-white border-amber-200 rounded-3xl w-50" onClick={()=>who("Farhan Hussain")}>Name please</button>
    
    {/* Inner Component */}
    <InnerComp/>

    {/* Link */}

    <Link href="/login" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">Go to Login </Link>
    
    {/* Navigation */}
    <button onClick={()=>router.push("/login")}>Go to Login</button>
    <button onClick={()=>navigate("/about")}>Go to About</button>
    <Link href="/api" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">API Call</Link>
    </div>
  );
}

const User=(props)=>{
  return(
    <div>
      <h2 className="text-white">My name is {props.name}</h2>
    </div>
  )
}