
import React, { useContext } from "react";
import { cookies } from "next/headers";
import CheckUser from "./checkUser";




export default async function Layout({
    children,
    
  }: {
    children: React.ReactNode;
    
  }){
    const cookie = cookies().get('session')?.value
    console.log("cookie is", cookie);

    
    return (
       
         <div>
            <CheckUser params={{session: cookie}} />
        {children}
        </div>
      
    )
  }