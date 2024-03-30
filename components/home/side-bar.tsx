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
        <SheetContent>
            <SheetHeader>
                <SheetTitle className=' mt-20'>
                  <Link href={'/auth/login'}>Login</Link>
                </SheetTitle>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}
