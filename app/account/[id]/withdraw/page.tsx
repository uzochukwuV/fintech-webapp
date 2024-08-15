
"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

function Withdraw() {
  return (
    <div className=' w-full text-black'>
       <div className=' p-6'>
       <Image src={"/svg/online_payments.svg"} className=' mx-auto' alt='None' width={300} height={240} />
       <div className="p-4 max-w-md mx-auto">
          <h1 className=' font-sans text-2xl my-4 font-medium text-center'>Deposit</h1>
          <p className=' mb-4'>Provide your usdt wallet address</p>

          <Input type='text' placeholder='USDT adress'  ></Input>

          <p className=' my-4'>Amount in US dollar</p>
          <Input type='number' max={5000} min={20} placeholder='$50'  ></Input>

          <div className='my-4'>
            <Button className=' bg-blue-700'>Enter</Button>
          </div>

          <div className="my-4 text-sm text-slate-400">
              Please note that direct withdrawal to your crypto wallet is at your own risk and always beware the risk involved with crypto transactions. Beware of scammers.
          </div>
       </div>
       </div>
    </div>
  )
}

export default Withdraw;