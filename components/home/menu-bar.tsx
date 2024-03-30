"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

import { SideBar } from "./side-bar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const MenuBar = (params?: { params?: { id: any } }) => {
  const [id, setId] = useState(null);
  const router = useRouter();
  const path = usePathname()

  useEffect(() => {
    
    if (params?.params?.id?.user) {
      setId(params.params.id.user._id);
    }

    if(window?.document){
      changeNav()
    }
  });

  


  
  

  function changeNav() {
    
    document?.addEventListener("scroll", (e:Event)=> {
      let nav = document?.getElementById("navigation");
      

      if(window.scrollY >= 100){
        nav?.classList.contains("translate-y-0") === true? nav?.classList.remove('translate-y-0'): null;
        nav?.classList.add('-translate-y-16')

      }else {
        nav?.classList.contains("-translate-y-16") === true? nav.classList.remove("-translate-y-16"): null;
        nav?.classList.add('translate-y-0')
      }
      
      
      // requestAnimationFrame(changeNav)
  })
  }

  
  
  

  return (
    <div

     id="navigation"

      className={cn(
        "fixed top-0 right-0 z-10   transition-all duration-300 left-0 px-4 md:px-8 lg:px-12 py-4 ", path.includes("auth")&& ' bg-gray-100 text-black '
      )}
    >
      <div className={cn("flex justify-between")}>
        <div className={cn("flex md:gap-2 justify-between items-center")}>
          <Image src={""} alt="" height={50} width={50} />
        </div>
        <div
          className={cn(
            "flex md:hidden gap-4 md:gap-10 justify-between items-center"
          )}
        >
          <SideBar />
        </div>
        <div
          className={cn(
            "gap-0 lg:gap-1 justify-between text-lg md:text-sm lg:text-lg  items-center hidden md:flex"
          )}
        >
          <div
            className={cn(" hover:text-green-600  rounded px-2 md:px-4 py-2")}
          >
            Home
          </div>
          <div
            className={cn(" hover:text-green-600  rounded px-2 md:px-4 py-2")}
          >
            Services
          </div>
          <div
            className={cn(" hover:text-green-600  rounded px-2 md:px-4 py-2")}
          >
            About
          </div>
          <div
            className={cn(" hover:text-green-600  rounded px-2 md:px-4 py-2")}
          >
            Products
          </div>
          <div
            className={cn(" hover:text-green-600  rounded px-2 md:px-4 py-2")}
          >
            Testimony
          </div>
          <div
            className={cn(" hover:text-green-600  rounded px-2 md:px-4 py-2")}
          >
            FAQ
          </div>
        </div>
        <div
          className={cn(
            "hidden md:flex gap-1 md:gap-2 lg:gap-6 md:text-lg justify-between items-center"
          )}
        >
          {/* <div>
            <ModeToggle />
          </div> */}
          {id ? (
            <div>
              <div>
                <Button
                  onClick={() => router.push(`/account/${id}`)}
                  className=" bg-green-600"
                >
                  Dashboard
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <div>
                <Button
                  onClick={() => router.push("/auth/login")}
                  className="  text-green-800  w-20 "
                >
                  Login
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => router.push("/auth/register")}
                  className=" text-green-800 border   w-20"
                >
                  Sign up
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
