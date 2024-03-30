import { ArrowRight, ChevronRight, CircleGauge } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function ActivePlans() {
  return (
    <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-5 text-black'>
        <h2 className="text-2xl">Active Plans (2) </h2>
        <ComponentPlan />
        <ComponentPlan />

        <div>
            <h2 className="text-2xl">Recently Ended (2)</h2>
            <ComponentPlan />
            <ComponentPlan />
        </div>
    </div>
  )
}







function ComponentPlan() {
  return (
    <div className='flex justify-between gap-2 bg-slate-50 py-5 my-5 rounded-xl px-5'>
            <div className='flex gap-6 items-center'>
                <div>
                    <CircleGauge className=' text-gray-600' />
                </div>
                <div>
                    <p className=' text-slate-700 text-sm font-medium'>Silver - Daily 4.76% for 21 Days</p>
                    <p className=' text-slate-500 text-xs'>Invested Amount - $250</p>
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