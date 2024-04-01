

import React, { useContext } from "react";
import { cookies } from "next/headers";
import Router from "next/router";
import { useRouter } from "next/navigation";


export default async function Layout({
    children,
    
  }: {
    children: React.ReactNode;
    
  }){
    const router = useRouter()
    const cookie = cookies().get('session')
    console.log("cookie is", cookie);

    if(cookie){
        router.push('/')
    }
    
    

    
    
    
    return (
       
         <div>
      
        {children}
        </div>
      
    )
  }