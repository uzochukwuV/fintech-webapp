"use client"

import React, { useContext, useTransition } from 'react'
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetHeader, SheetFooter, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Context, Dispatch } from '@/app/state'
import { cn } from '@/lib/utils'

export const AccountSideBar = () => {
    const transition = useTransition()
    const router = useRouter();
    const path = usePathname();
    const dispatch = useContext(Dispatch)
    const logout = ()=> {
      dispatch({type: "delete", payload: {}}),
      fetch('/api/logout').then((res)=> res.json()
      ).then((val)=> transition[1](()=> router.push("/auth/login"))
      )
      
  }

    const {user, account} = useContext(Context)
  return (
    <Sheet>
        <SheetTrigger asChild>
            <MenuIcon />
        </SheetTrigger>
        <SheetContent className='  w-60 bg-black/40 '>
            <SheetHeader className=' '>
                <SheetTitle className='  space-y-6 text-slate-800 flex justify-start items-start flex-col gap-6 *:rounded-lg  *:p-2'>
                <div className="flex flex-col gap-4 items-center ">
          <div className=" px-2 py-2 rounded-sm  flex gap-2 font-medium">
          <div className="flex">
                  {/* <PersonIcon className=" font-medium" fontWeight={700} /> */}
                  <p className=" text-3xl">STOXAFX</p>
                </div>
          </div>
          <div className="flex flex-col gap-7 *:text-sm *:text-white uppercase justify-start items-start text-base  ">
            <div className={cn(' hover:bg-blue-300 -500 rounded-full p-2', path == `/account/${user?._id}`&& ' text-white -400'  )}>
            <Link href={`/account/${user?._id}`}   >Overview</Link>
            </div>
            <div className={cn(' hover:bg-blue-300 -500 rounded-full p-2', path == `/account/${user?._id}/plans`&& ' text-white -400'  )}>
              <Link href={`/account/${user?._id}/plans`}>Plans</Link>
            </div>
            <div className={cn(' hover:bg-blue-300 -500 rounded-full p-2', path == `/account/${user?._id}/invest`&& ' text-white -400'  )}>
            <Link href={`/account/${user?._id}/invest`}>Invest</Link>
            </div>
            <div className={cn(' hover:bg-blue-300 -500 rounded-full p-2', path == `/account/${user?._id}/invest`&& ' text-white -400'  )}>
            <Link href={`/account/${user?._id}/deposit`}>Deposit</Link>
            </div>
            <div className={cn(' hover:bg-blue-300 -500 rounded-full p-2', path == `/account/${user?._id}/invest`&& ' text-white -400'  )}>
            <Link href={`/account/${user?._id}/withdraw`}>Withdraw</Link>
            </div>
            <div className={cn(' hover:bg-blue-300 -500 rounded-full p-2', path == `/account/${user?._id}/profile`&& ' text-white -400'  )}>
            <Link href={`/account/${user?._id}/profile`}>Profile</Link>
            </div>
          </div>
        </div>
                </SheetTitle>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}
