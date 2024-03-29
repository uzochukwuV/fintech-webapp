'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

function Plans() {
  return (
    <div className='relative md:max-h-screen md:h-[600px] pt-24 py-4  text-black px-4 md:px-8 lg:px-12'>
      {/* <div className=' text-center my-6'>
        <h2 className=' font-semibold text-3xl '>Earn with Trading Plans</h2>
      </div> */}
      <div className=' md:h-[80%] lg:h-full md:grid grid-cols-12 gap-10 rounded-3xl mx-auto'>
       
         <div className=' md:col-span-6 flex flex-col justify-center gap-8'>
             <div>
             <h1 className=' leading-none text-4xl lg:text-5xl  text-slate-900 font-semibold text-pretty'>Trade and Earn with your favourite cryptocurrencies</h1>
             </div>
              <div>
              <p className='text-base text-slate-800'>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
              </div>
              <div className='flex gap-16 items-baseline'>
                <div>
                <Button className=' capitalize caption-top'>GET STARTED</Button>
                </div>

                <div>
                  <p className=' border-b border-spacing-4 border-dashed'>Check out our plans</p>
                </div>

              </div>
         </div>
         <div className='h-[400px] sm:h-[500px] mt-20 md:mt-0 md:h-full  bg bg-black md:col-span-6 bg-auto rounded-md  md:rounded-3xl '>
              {/* <Image src={'/btc.jpg'} alt='' width={500} height={500} className=' w-full aspect-auto bg-cover rounded-3xl ' /> */}
         
         </div>
      </div>
    </div>
  )
}

export default Plans