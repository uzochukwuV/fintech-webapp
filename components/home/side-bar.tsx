"use client"

import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetHeader, SheetFooter, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

export const SideBar = () => {
  const path = usePathname();
  const router = useRouter();
  return (
    <Sheet>
        <SheetTrigger asChild>
            <MenuIcon color='#ffffff' />
        </SheetTrigger>
        <SheetContent className=' bg-white'>
            
                
        <Image src={"/logo2.png"} alt="" width={100} height={40} />          
        <br /><br />
                  <div
          className={cn(
            "flex-col flex justify-between text-lg gap-10 items-start  "
          )}
        >
          <Link href={'/auth/login'}>Login</Link>
          <Link href={'/auth/register'}>Register</Link>
          <Link
            href={"/"}
            className={cn(
              " hover:text-green-600   ",
              path.includes("auth") && " text-slate-700"
            )}
          >
            <div>Home</div>
          </Link>
          <Link
            href={"/#about"}
            className={cn(
              " hover:text-green-600   ",
              path.includes("auth") && " text-slate-700"
            )}
          >
            <div>About</div>
          </Link>
          <Link
            href={"/#services"}
            className={cn(
              " hover:text-green-600   ",
              path.includes("auth") && " text-slate-700"
            )}
          >
            <div>Services</div>
          </Link>
          <Link
            href={"/#product"}
            className={cn(
              " hover:text-green-600   ",
              path.includes("auth") && " text-slate-700"
            )}
          >
            <div>Products</div>
          </Link>
          <div
            className={cn(
              " hover:text-green-600   ",
              path.includes("auth") && " text-slate-700"
            )}
          >
            Testimony
          </div>
          <div
            className={cn(
              " hover:text-green-600   ",
              path.includes("auth") && " text-slate-700"
            )}
          >
            FAQ
          </div>
        </div>
                
           
            
        </SheetContent>
    </Sheet>
  )
}
