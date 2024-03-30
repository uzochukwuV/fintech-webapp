

import React, { useContext } from "react";
import { updateSession } from "@/lib/auth";
import { cn } from "@/lib/utils";



export default async function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){


    
    
    
    return (
       
         <div
      className={cn(
        " min-h-screen text-sm antialiased  text-white  flex flex-col  absolute top-0 right-0 left-0  "
       
      )}
    >
      
        {children}
        </div>
      
    )
  }