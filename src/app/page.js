'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [name,setName] = useState("Farhan");

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