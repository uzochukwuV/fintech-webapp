import IsAuthenticated from "@/components/account/isAuthenticated";
import Menu from "@/components/account/menu";
import React from "react";



export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  
  
  return (
    <>
    <Menu />
     
        {children}
     
    </>
  );
}
