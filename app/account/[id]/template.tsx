import { updateSession } from "@/lib/auth";
import React from "react"

export default function Template({ children }: { children: React.ReactNode }) {
    console.log("Template mounted");
    
    
    return <div>{children}</div>
  }