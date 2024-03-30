"use client"

import React, { PropsWithoutRef, useContext } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Context } from '@/app/state'


const plans = [
    {
        type: "Starter",
        description: "Enjoy Entry level of inves and earn",
        daily_interest: "3.57",
        term_days: 5,
        min_deposit: 500,
        max_deposit: 2000
    },
    {
        type: "Silver",
        description: "Best plan for users to invest and earn",
        daily_interest: "10.57",
        term_days: 21,
        min_deposit: 1500,
        max_deposit: 5000
    },
    {
        type: "Diamond",
        description: "Advanced level of invest and earn",
        daily_interest: "3.57",
        term_days: 30,
        min_deposit: 5000,
        max_deposit: 10000
    }
]

interface PlanInterface {
    type: String,
        description: String,
        daily_interest: String,
        term_days: Number,
        min_deposit: Number,
        max_deposit: Number
}



function SubComponent() {
  const {user, account} = useContext(Context)
  return (
    <section className=' px-12 py-10'>
        <h1 className=' mx-auto text-center text-black text-3xl font-medium max-w-sm'> Start a  Journey</h1>
        <p className=' text-center text-slate-500 text-xs'>We provide you with the best alternative so you can earn while you sleep</p>
        <div className='flex gap-10 justify-center rounded-2xl bg-slate-50 py-10 mt-6'>
        {
            plans.map((plan)=> <SubComponentPlan props={plan} />)
        }
        
    </div>
    </section>
  )
}

export default SubComponent


function SubComponentPlan({props}:{props: PlanInterface}) {
   
  const {user, account} = useContext(Context)
    return (
        <div>
            <div className="balance min-w-[300px] rounded-lg flex-1 p-6 bg-white h-[75vh] flex flex-col ">
        <div className=" h-20 border-b-2 py-4 pb-6">
          <p className="text-2xl  text-black ">{props.type} </p>
          <p className="text-slate-500 ">{props.description}</p>
        </div>
        <div className=" pt-2">
          <div className="flex justify-between text-slate-700 py-2">
            <p>Daily interest</p>
            <p className=' text-green-500'>{props.daily_interest}%</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>Term days </p>
            <p>{props.term_days.toString()}</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>min Deposit</p>
            <p>${props.min_deposit.toString()}</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>max Deposit</p>
            <p>${props.max_deposit.toString()}</p>
          </div>
          <div className="flex justify-between border-t border-dashed border-slate-300 text-slate-700 py-2">
            <p>Total Return </p>
            <p>${props.max_deposit.toString()}</p>
          </div>
        </div>
        <div className=" flex-1 mt-10 space-y-2 flex flex-col justify-end items-start text-end">
          {/* <Button className=" w-full text-sm bg-green-400 ">Invest and Earn</Button> */}
          <Button className={cn(" w-full text-sm text-slate-500", props.type == "Silver"&& " bg-green-500 text-slate-200")}>Choose this plan  <span className="ps-2 text-green-500"> Now</span> </Button>
        </div>
      </div>
        </div>
      )
}