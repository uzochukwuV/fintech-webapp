"use client"
import React, { startTransition, useContext, useTransition } from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { BellDotIcon, LogOutIcon, MenuSquareIcon } from 'lucide-react'
import Link from 'next/link'
import { Context, Dispatch } from '@/app/state'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { AccountSideBar } from './sidebar'

function Menu() {
    const transition = useTransition()
    const router = useRouter();
    const path = usePathname()
    const dispatch = useContext(Dispatch)
    const logout = ()=> {
      dispatch({type: "delete", payload: {}}),
      fetch('/api/logout').then((res)=> res.json()
      ).then((val)=> transition[1](()=> router.push("/auth/login"))
      )
      
  }

    const {user, account} = useContext(Context)

    // if(!user._id) return <div className=' flex justify-end items-center'>An Error Occurred</div>
  return (
    <section className=' h-16'>
    <div className=" h-16  fixed top-0 left-0 right-0  flex items-center z-40  justify-between w-full bg-gray-900 px-6">
        <div className="flex gap-4 items-center ">
          <div className=" px-2 py-2 rounded-sm w-40 md:w-60 flex gap-2 font-medium">
          <div className="flex">
                  {/* <PersonIcon className=" font-medium" fontWeight={700} /> */}
                  <p className=" text-3xl">STOXAFX</p>
                </div>
          </div>
          <div className="md:flex gap-7 *:text-sm uppercase items-center text-base hidden ">
            <div className={cn(' hover:bg-gray-500 rounded-full p-2', path == `/account/${user?._id}`&& ' text-green-400'  )}>
            <Link href={`/account/${user?._id}`}   >Overview</Link>
            </div>
            <div className={cn(' hover:bg-gray-500 rounded-full p-2', path == `/account/${user?._id}/plans`&& ' text-green-400'  )}>
              <Link href={`/account/${user?._id}/plans`}>Plans</Link>
            </div>
            <div className={cn(' hover:bg-gray-500 rounded-full p-2', path == `/account/${user?._id}/invest`&& ' text-green-400'  )}>
            <Link href={`/account/${user?._id}/invest`}>Invest</Link>
            </div>
            <div className={cn(' hover:bg-gray-500 rounded-full p-2', path == `/account/${user?._id}/profile`&& ' text-green-400'  )}>
            <Link href={`/account/${user?._id}/profile`}>Profile</Link>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <AccountSideBar />
        </div>
        <div className="  justify-end gap-10 w-3/12 items-center hidden md:flex">
          <div className="flex gap-4 items-center">
          
          <Avatar className=" bg-green-500">
            <AvatarImage src="" />
            <AvatarFallback className=" bg-green-600">
              <p>P</p>
            </AvatarFallback>
          </Avatar>

          <div>
            <p className=" text-xs">Verified</p>
            <p>{user.username}</p>
          </div>


          </div>
          <div className="flex gap-6 items-center">
            <div className=" rounded-full p-2 hover:bg-gray-500 group">
              <BellDotIcon color="white" ascent='5' className=' group-hover:animate-bounce duration-500'  />
            </div>
            <div className=" ">
              <Button className=" bg-transparent rounded-full p-2 hover:bg-gray-500" onClick={logout} ><LogOutIcon color="white" /></Button>
            </div>
          </div>
        </div>
      </div>

      </section>

  )
}

export default Menu