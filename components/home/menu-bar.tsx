"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";


import { SideBar } from "./side-bar";
import Link from "next/link";
import { usePathname} from "next/navigation";


export const MenuBar = ({ cookieId }: { cookieId?: string | null }) => {
  
  const path = usePathname();
  const id = cookieId;
  


  

  return (
    <div
      id="navigation"
      className={cn(
        "fixed top-0 right-0 z-10 bg-black/55   transition-all duration-300 left-0 px-4 md:px-8 lg:px-12 py-2 ",
        path.includes("auth") && " bg-gray-100 text-black "
      )}
    >
      <div className={cn("flex justify-between")}>
        <div className={cn("flex md:gap-2 justify-between items-center ")}>
          <h1 className=" font-man font-semibold text-3xl text-white/80">Stoxa</h1>
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
          <Link
            href={"/"}
            className={cn(
              " hover:text-blue-600 text-slate-200  rounded px-2 md:px-4 py-2",
              path.includes("auth") && " text-slate-700"
            )}
          >
            <div>Home</div>
          </Link>
          <Link
            href={"/#about"}
            className={cn(
              " hover:text-blue-600 text-slate-200  rounded px-2 md:px-4 py-2",
              path.includes("auth") && " text-slate-700"
            )}
          >
            <div>About</div>
          </Link>
          <Link
            href={"/#services"}
            className={cn(
              " hover:text-blue-600 text-slate-200  rounded px-2 md:px-4 py-2",
              path.includes("auth") && " text-slate-700"
            )}
          >
            <div>Services</div>
          </Link>
          <Link
            href={"/#product"}
            className={cn(
              " hover:text-blue-600 text-slate-200  rounded px-2 md:px-4 py-2",
              path.includes("auth") && " text-slate-700"
            )}
          >
            <div>Products</div>
          </Link>
          <div
            className={cn(
              " hover:text-blue-600 text-slate-200  rounded px-2 md:px-4 py-2",
              path.includes("auth") && " text-slate-700"
            )}
          >
            Testimony
          </div>
          <div
            className={cn(
              " hover:text-blue-600 text-slate-200  rounded px-2 md:px-4 py-2",
              path.includes("auth") && " text-slate-700"
            )}
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
                <Link
                  href={`/account/${id}`}
                  prefetch
                  className=" bg-blue-600 w-20 py-3 hover:bg-blue-700 px-4 text-sm rounded-md"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 font-bold">
              <div>
                <Link
                  href={"/auth/login"}
                  className="  text-blue-700 bg-transparent  w-20  py-3 hover:bg-blue-700 hover:text-white px-4 text-sm rounded-md"
                >
                  Login
                </Link>
              </div>
              <div>
                <Link
                  href={"/auth/register"}
                  prefetch
                  className=" text-blue-700 border bg-transparent  py-3 hover:bg-blue-700 hover:text-white px-4 text-sm rounded-md  w-20"
                >Register</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
