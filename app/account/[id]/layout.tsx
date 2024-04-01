

import { checkId } from "@/lib/auth";
import React from "react";
import Error from "./error";
import { getAccount, getUser } from "@/lib/helpers";
import IsAuthenticated from "./isAuthenticated";







export default async function Layout({
    children,
    params
  }: {
    children: React.ReactNode;
    params: {id: string}
  }){

    
    const {user} = await getUser(params.id!)
    const {account}= await getAccount(user._id)
    
    try {
        const isUser = await checkId(params.id)
        console.log(isUser);

        if(!isUser) return <Error />
    } catch (error) {
        throw error
    }
    

    
    
    
    return (
       
         <>
        <IsAuthenticated params={{user, account}} />
        {children}
        </>
      
    )
  }