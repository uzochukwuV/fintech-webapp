'use client'
import Image from 'next/image'
import React, { PropsWithChildren } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

function SideBar({children}: PropsWithChildren) {
    const router = useRouter()
    const logout = ()=> {
        fetch('/api/logout').then((res)=> res.json()
        ).then((val)=> console.log(val.status)
        )
        router.replace("/auth/login")
    }
    
  return (
    <div>
<div className="flex flex-wrap bg-gray-50 w-full min-h-screen">
    <div className="md:w-3/12 w-16 bg-white rounded p-2 shadow-lg">
        <div className="flex items-center space-x-4 p-2 mb-5">
            <Image className="h-12 rounded-full mx-auto md:mx-0" src="" alt="James Bhatta" width={30} height={30} />
            {/* http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp */}
            <div className='hidden md:block'>
                <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">James Bhatta</h4>
                <span className="text-sm tracking-wide flex items-center space-x-1">
                    <svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg><span className="text-gray-600">Verified</span>
                </span>
            </div>
        </div>
        <ul className="space-y-2 text-sm">
            <li>
                <a href="#" className="flex items-center bg-transparent group space-x-3 text-gray-700 p-2 rounded-md font-medium md:hover:bg-gray-200  focus:shadow-outline">
                    <span className="text-gray-600  p-2 md:px-0 rounded-sm mx-auto md:mx-0">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <span className='hidden group-hover:block group-hover:bg-gray-200 p-2 rounded-sm md:inline-block md:px-0 z-20  '>Dashboard</span>
                </a>
            </li>
           
           
            <li>
                <a href="#" className="flex items-center bg-transparent group space-x-3 text-gray-700 p-2 rounded-md font-medium md:hover:bg-gray-200  focus:shadow-outline">
                    <span className="text-gray-600  p-2 md:px-0 rounded-sm mx-auto md:mx-0">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span className='hidden group-hover:block md:group-hover:left-9 group-hover:absolute group-hover:left-14 group-hover:bg-gray-200 p-2 rounded-sm md:inline-block md:px-0 z-20  '>My Profile</span>
                </a>
            </li>
            
            <li>
                <a href="#" className="flex items-center bg-transparent group space-x-3 text-gray-700 p-2 rounded-md font-medium md:hover:bg-gray-200  focus:shadow-outline">
                    <span className="text-gray-600  p-2 md:px-0 rounded-sm mx-auto md:mx-0">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </span>
                    <span className='hidden group-hover:block group-hover:bg-gray-200 p-2 rounded-sm md:inline-block md:px-0 z-20  '>Subscriptions</span>
                </a>
            </li>
          
        
            <li>
                <a href="#" className="flex items-center bg-transparent group space-x-3 text-gray-700 p-2 rounded-md font-medium md:hover:bg-gray-200  focus:shadow-outline">
                    <span className="text-gray-600  p-2 md:px-0 rounded-sm mx-auto md:mx-0">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </span>
                    <span className='hidden group-hover:block group-hover:bg-gray-200 p-2 rounded-sm md:inline-block md:px-0 z-20  '>Settings</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center bg-transparent group space-x-3 text-gray-700 p-2 rounded-md font-medium md:hover:bg-gray-200  focus:shadow-outline">
                    <span className="text-gray-600  p-2 md:px-0 rounded-sm mx-auto md:mx-0">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
                    <span className='hidden group-hover:block group-hover:absolute md:group-hover:left-9 group-hover:left-14 group-hover:bg-gray-200 p-2 rounded-sm md:inline-block md:px-0 z-20  '>Change Password</span>
                </a>
            </li>
            <li>
                <Button onClick={logout}  className="flex items-center bg-transparent group space-x-3 text-gray-700 p-2 rounded-md font-medium md:hover:bg-gray-200 focus:bg-gray-200  focus:shadow-outline">
                    <span className="text-gray-600  p-2 md:px-0 rounded-sm mx-auto md:mx-0">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </span>
                    <span className='hidden group-hover:block group-hover:bg-gray-200 p-2 rounded-sm md:inline-block md:px-0 z-20  '>Logout </span>
                </Button>
            </li>
            
          
        </ul>
    </div>

    <div className="w-9/12 mx-auto">
        <div className="p-2 text-gray-500">
            {children}
        </div>
    </div>
</div>
    </div>
  )
}

export default SideBar