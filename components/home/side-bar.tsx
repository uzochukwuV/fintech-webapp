import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetHeader, SheetFooter, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

export const SideBar = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <MenuIcon />
        </SheetTrigger>
        <SheetContent className=' bg-slate-100'>
            <SheetHeader className=' bg-slate-100'>
                <SheetTitle className=' mt-20 space-y-6 text-black flex justify-start items-start flex-col gap-6 *:rounded-lg *:border *:p-2'>
                  <Link href={'/auth/login'}>Login</Link>
                  <Link href={'/auth/register'}>Register</Link>
                </SheetTitle>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}
