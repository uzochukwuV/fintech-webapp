"use client"
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { Settings } from 'lucide-react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { Context } from '@/app/state'

function Dashboard() {
    const router =useRouter()
    const {user, account}= useContext(Context)
    const toInvest =()=> {
        router.push(`/account/${user._id}/invest`)
    }
  return (
    <section className='px-4 sm:px-8 md:px-12 lg:px-20 py-10'>
        <div className='md:flex justify-between h-20  text-black'>
            <div className=' flex-col flex h-20 justify-between'>
                <p className='text-slate-500 text-sm'>My Plan</p>
                <h2 className=' text-2xl font-medium'>Invested Scheme</h2>
                <p className='text-slate-500 text-xs'>Here is your current balance and your active investement plans.</p>
            </div>
            <div className='flex py-2 items-end h-20 gap-6'>
                <Button className=' space-x-3 group'><span>Withdraw</span> <ArrowRightIcon className=' group-hover:translate-x-2 transition-all duration-500' /> </Button>
                <Button onClick={toInvest} className=' space-x-3 group'><span>Invest More</span> <ArrowRightIcon className=' group-hover:translate-x-2 transition-all duration-500' /> </Button>
                <Button className='group'> <Settings className=' group-hover:rotate-90 transition-all duration-500 ' />  </Button>
            </div>
        </div>
    </section>
  )
}

export default Dashboard