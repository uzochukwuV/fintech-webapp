"use client"

import React, { useState } from 'react'
import Trx from './tyr'
import NotificationSetting from './notifications'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import ChangePassword from './changePassword'

function Personal() {
    const [step, setStep] = useState(0)
    const items = [<Trx key={1} />,   <Trx key={2} /> , <NotificationSetting key={3} />, <ChangePassword />  ]

    let current = items[step]
  return (
    <section className=' text-black p-4 sm:px-8 md:px-12 lg:px-20'>
        <div className="personalHead py-4 ">
            <p className=' text-slate-500'>My profile</p>
            <h2 className=' text-3xl font-medium'>Account Info</h2>
            <p className=' text-slate-500'>You have full control to manage your own account setting.</p>
        </div>
        <div className="personalLinks border-b *:text-xs *:sm:text-sm  border-b-gray-300 *:sm:px-2 *:px-1 *:py-1 *:border-slate-300 *:rounded-full *:border flex gap-2 sm:gap-4 md:gap-8 py-4 *:font-medium ">
            <Button onClick={()=> setStep(0)} className={cn(' bg-transparent py-0 hover:bg-slate-100 transition-all duration-300 text-slate-600', step == 0 && " bg-slate-600 text-white hover:bg-slate-500")}>Personal</Button>
            <Button onClick={()=> setStep(1)} className={cn(' bg-transparent py-0 hover:bg-slate-100 transition-all duration-300 text-slate-600', step == 1 && " bg-slate-600 text-white hover:bg-slate-500")}>Security</Button>
            <Button onClick={()=> setStep(2)} className={cn(' bg-transparent py-0 hover:bg-slate-100 transition-all duration-300 text-slate-600', step == 2 && " bg-slate-600 text-white hover:bg-slate-500")}>Notifications</Button>
            <Button onClick={()=> setStep(3)} className={cn(' bg-transparent py-0 hover:bg-slate-100 transition-all duration-300 text-slate-600', step == 3 && " bg-slate-600 text-white hover:bg-slate-500")}>Change Password</Button>
        </div>
        <div className="personalInfo py-4">
            <h3 className=' text-3xl font-medium'>Personal Information</h3>
            <p className=' text-slate-500'>Basic info, like your name and address, that you use on Nio Platform</p>
        </div>
        {/* <div>
            <div className=' flex text-slate-600 gap-40 pb-4'>
                <p>Full Name</p>
                <p>Damian James Lane</p>
            </div>
            <div className=' flex text-slate-600 gap-40 pb-4'>
                <p>Full Name</p>
                <p>Damian James Lane</p>
            </div>
            <div className=' flex text-slate-600 gap-40 pb-4'>
                <p>Full Name</p>
                <p>Damian James Lane</p>
            </div>
            <div className=' flex text-slate-600 gap-40 pb-4'>
                <p>Full Name</p>
                <p>Damian James Lane</p>
            </div>
        </div> */}
        {current}
    </section>
  )
}

export default Personal



