

import { checkId } from "@/lib/auth";
import React from "react";
import Error from "./error";







export default async function Layout({
    children,
    params
  }: {
    children: React.ReactNode;
    params: {id: string}
  }){

    
    console.log(params);
    console.log('Layout 2 mounted');
    
    try {
        const isUser = await checkId(params.id)
        console.log(isUser);

        if(!isUser) return <Error />
    } catch (error) {
        throw error
    }
    

    
    
    
    return (
       
         <>
      
        {children}
        </>
      
    )
  }