import React from "react";
import { updateSession } from "@/lib/auth";


export default async function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    
    
    
    return (
        <>
        {children}
        </>
    )
  }