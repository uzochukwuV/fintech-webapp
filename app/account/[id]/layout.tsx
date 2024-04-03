

import { checkId } from "@/lib/auth";
import React from "react";
import Error from "./error";
import { getAccount, getUser } from "@/lib/helpers";
import IsAuthenticated from "@/components/account/isAuthenticated";







export default async function Layout({
    children,
    params
  }: {
    children: React.ReactNode;
    params: {id: string}
  }){

    
    try {
        const isUser = await checkId(params.id)
        console.log(isUser);

        if(!isUser) return <Error />
    } catch (error) {
        throw error
    }
    

    
    
    
    return (
       
         <>
        <IsAuthenticated params={{id: params.id!}} />
        {children}
        </>
      
    )
  }