"use client"
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

import TypeIt from "typeit-react";
import { Context } from '@/app/state'




export const Hero = () => {
  
  return (
    <div className='hero-container sm:pt-20 md:pt-10 sm:max-h-screen h-[600px] py-10 w-full  relative '>
        <div className='background-video absolute right-0 left-0 top-0 bottom-0'>
          <video src="/background2.mp4" playsInline autoPlay muted loop className='object-cover h-full w-full'></video>
        </div>
        <div className='relative w-full grid grid-cols-12 items-center h-full p-2 sm:p-6 md:px-12  z-10'>
            <div className='pt-20 sm:pt-0 md:mt-20 col-span-12 sm:col-span-11 md:col-span-6 '>
                  
             <div className='min-h-[150px] md:min-h-[200px]'>
              <h1 className='text-4xl antialiased capitalize text-pretty font-semibold sm:text-5xl  md:text-6xl  duration-500 delay-100 ' ><span className='block md:inline text-green-600 '>Generalize </span> and get <span className='text-green-600'>customers</span> feedback</h1>
             </div>
                  <p className='text-xs sm:text-sm text-slate-300 my-2 delay-200 md:my-4 h-14 sm:h-10 animate-text duration-500  pt-10 overflow-hidden'>Get insights of what your customers want using our product on a daily basis through forex salvaging amd forex trading leveraging</p>
                  <div className='sm:h-12 h-12 animate-text duration-500 delay-200  pt-20 overflow-hidden'>
                  <Button className=' bg-green-600 hover:bg-green-400 text-white px-8  mt-2 hover:-translate-y-2 transition-transform py-5'>Lets Get Started</Button>
                  </div>
            </div>
        </div>
    </div>
  )
}




