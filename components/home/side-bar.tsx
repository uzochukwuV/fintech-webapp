import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetHeader, SheetFooter, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'

export const SideBar = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <MenuIcon />
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Hwfa</SheetTitle>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}
