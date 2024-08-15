
"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

function DepositPage() {
  return (
    <div className=' w-full text-black'>
       <div className=' p-6'>
       <Image src={"/svg/online_payments.svg"} className=' mx-auto' alt='None' width={300} height={240} />
       <div className="p-4 max-w-md mx-auto">
          <h1 className=' font-sans text-2xl my-4 font-medium text-center'>Deposit</h1>
          <p className=' mb-4'>Copy your usdt wallet address</p>

          <p className='font-medium'>0x3ff030998u98wffe98e73</p>

          <p className=' my-4'>Amount in US dollar</p>
          <Input type='number' max={5000} min={20} placeholder='$50'  ></Input>
          
          <p className=' mt-4 text-gray-500 text-sm'>click on deposited after you have made the deposit to confirm</p>
          <div className='my-4'>
            <Button className=' bg-blue-700'>Deposited</Button>
          </div>

          <div className="my-4 text-sm text-slate-400">
              Please note that direct withdrawal to your crypto wallet is at your own risk and always beware the risk involved with crypto transactions. Beware of scammers.
          </div>
       </div>
       </div>
    </div>
  )
}

export default DepositPage