"use client"
import * as React from 'react'

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

import TypeIt from "typeit-react";
import { Context } from '@/app/state'




export const Hero = () => {
  const context = React.useContext(Context)

  React.useEffect(() => {
    console.log(context);
    
  }, [])
  
  return (
    <div className='hero-container sm:pt-20 md:pt-10 sm:max-h-screen h-[600px] py-10 w-full  relative '>
        <div className='background-video absolute right-0 left-0 top-0 bottom-0'>
          <video src="/background2.mp4" playsInline autoPlay muted loop className='object-cover h-full w-full'></video>
        </div>
        <div className='relative w-full grid grid-cols-12 items-center h-full p-2 sm:p-6 md:px-12  z-10'>
            <div className='pt-20 sm:pt-0 md:mt-20 col-span-12 sm:col-span-11 md:col-span-6 '>
                  
             <div className='min-h-[150px] md:min-h-[200px]'>
             <TypeIt>   <h1 className='text-4xl antialiased capitalize text-pretty font-semibold sm:text-5xl  md:text-6xl  duration-500 delay-100 ' ><span className='block md:inline text-green-600 '>Generalize</span> and get <span className='text-green-600'>customers</span> feedback</h1></TypeIt>
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





export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  const cards = [<Card1 />, <Card2 />, <Card3 />]

  return (
    <Carousel
      plugins={[plugin.current]}
      className=" max-w-full m-0 p-0 border-0  w-screen  "
    //   onMouseEnter={plugin.current.stop}
    //   onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className='text-pretty rounded-none border-none'>
                <CardContent className="flex h-full min-h-screen    border-0 items-center">
                  
                  {cards[index]}

                </CardContent>
              </Card>
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}


 function Card1() {
  return (
    <section className={cn("flex flex-col-reverse md:flex-row gap-8  w-full md:px-4 lg:px-8 items-center justify-between")}>
        <div className={cn("flex-1 flex flex-col gap-6 justify-start items-start")}>
            <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl leading-10 max-w-lg text-pretty'>Take Charge of your Finance Today <span className=' text-indigo-500'>Through Supported trading</span></h1>
            <p className='md:text-sm text-xs text-slate-400'>Grow your portfolio and make money at the comfort of your home with us</p>
            <Link href={'/login'} >
              <Button>Register</Button>
            </Link>
        </div>
        <div className={cn("flex-1 w-full flex justify-end")}>
            <Image src={'/invest.svg'} alt='portfolio' width={100} height={100} className='h-[40vh] md:h-[60vh] w-auto mx-auto float-end' />
        </div>
    </section>
  )
}

function Card2() {
    return (
      <section className={cn("flex flex-col-reverse md:flex-row gap-8  w-full md:px-4 lg:px-8 items-center justify-between")}>
          <div className={cn("flex-1 flex flex-col  gap-6 justify-start items-start")}>
              <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl leading-10 max-w-lg'>Get Connected to Top  <span className='text-indigo-500'>Traders all over the Continent</span></h1>
              <p className='md:text-sm text-xs text-slate-400'>Grow your portfolio and make money at the comfort of your home with us</p>
              <Button>Register</Button>
          </div>
          <div className={cn("flex-1 w-full min-w-md flex justify-end")}>
              <Image src={'/enjoy.svg'} alt='portfolio' width={100} height={100} className='h-[40vh] md:h-[60vh] w-auto mx-auto float-end' />
          </div>
      </section>
    )
  }

  function Card3() {
    return (
      <section className={cn("flex relative flex-col-reverse md:flex-row gap-8  w-full md:px-4 lg:px-8 items-center justify-between")}>
          <div className={cn("flex-1 flex flex-col gap-6 justify-start items-start")}>
              <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl leading-10  max-w-lg'>Grow with Us and start your Revenue  <span className='text-indigo-500'>Six Figures Journey</span></h1>
              <p className='md:text-sm text-xs text-slate-400'>Grow your portfolio and make money at the comfort of your home with us</p>
              <Button>Register</Button>
          </div>
          <div className={cn("flex-1 flex w-full min-w-md justify-end relative")}>
              <Image src={'/revenue.svg'} alt='portfolio' width={100} height={100} className='h-[40vh] md:h-[60vh] w-auto mx-auto relative float-end' />
          </div>
      </section>
    )
  }
  