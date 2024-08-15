"use client"

import { ArrowRight, ChevronRight, CircleGauge } from 'lucide-react'
import React, { useMemo, useState } from 'react'
import { Button } from '../ui/button'
import { TransactionType } from '@/lib/utils';


function ActivePlans() {
    const [transactions, setTransactions]= useState<any>();

    useMemo(() => fetch("/api/user/transactions").then((res)=> res.json()).then((value)=> setTransactions(value)) , [])

    let active;
    let notActive;
    if(transactions){
        active = (transactions as Array<any>).filter((value)=> value.isActive);
        notActive = (transactions as Array<any>).filter((value)=> !value.isActive);
    }
    if(!transactions){
        return <>
        <div className="flex flex-col justify-between gap-2 bg-slate-50 py-5 my-5 rounded-xl px-5 animate-pulse">
  <div className="flex gap-6 items-center">
    <div className="h-full w-5 bg-gray-200 rounded"></div>
    <div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  </div>
  <div className="flex gap-6 items-center">
    <div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
    <div className="h-full w-5 bg-gray-200 rounded"></div>
    <div>
      <div className="h-4 w-1/2 bg-gray-200 rounded mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  </div>
  <div className="flex gap-6 items-center">
    <div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
    <div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
    <div className="h-full w-5 bg-gray-200 rounded"></div>
  </div>
</div>
        </>
    }
    
  return (
    <>
    {
        transactions ? (<div className='px-4 sm:px-8 md:px-12 lg:px-20 py-5 text-black'>
        <h2 className="text-2xl">Active Plans (2) </h2>
        
       {
       active?.map((value, index)=> <ComponentPlan data={value} key={index} /> )
       }


        <div>
            <h2 className="text-2xl">Recently Ended (2)</h2>
            {
        notActive?.map((value, index)=> <ComponentPlan data={value} key={index} /> )
       }
        </div>
    </div>): <div className=' text-lg text-lime-500'>Loading....</div>
    }
    </>
  )
}







function ComponentPlan({data}: {data: TransactionType}) {


  return (
    <div className='flex justify-between gap-2 bg-slate-50 py-5 my-5 rounded-xl px-5'>
            <div className='flex gap-6 items-center'>
                <div>
                    <CircleGauge className=' text-gray-600' />
                </div>
                <div>
                    <p className=' text-slate-700 text-sm font-medium'>{data.type} - Daily 4.76% for 21 Days</p>
                    <p className=' text-slate-500 text-xs'>Invested Amount - ${data.amount.toString()}</p>
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <div>
                    <p className='text-slate-800 text-sm'>Nov 04, 2019</p>
                    <p className=' text-slate-500 text-xs'>Start Date</p>
                </div>
                <div>
                    <ArrowRight className=' text-gray-500' ></ArrowRight>
                </div>
                <div>
                    <p className='text-slate-700 text-sm'>Nov 25, 2019</p>
                    <p className=' text-slate-500 text-xs'>End Date</p>
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <div>
                    <p className='text-slate-800 text-sm'>$ 499.99</p>
                    <p className=' text-slate-500 text-xs'>Total Return</p>
                </div>
                 
                <div>
                    <p className='text-slate-700 text-sm'>$ 97.95 ~ $152.04</p>
                    <p className=' text-slate-500'>Net Profit Earn</p>
                </div>
                <div>
                    <Button className=' hover:bg-gray-300 p-2 rounded-full group'> <ChevronRight className=' group-hover:translate-x-1 transition-all duration-500' /> </Button>
                </div>
            </div>
            
        </div>
  )
}


export default ActivePlans