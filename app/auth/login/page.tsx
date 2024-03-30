
import React from 'react'
import { MenuBar } from '@/components/home/menu-bar'
import LoginForm from '@/components/auth/login-form'
import Image from 'next/image'

function LoginPage() {
  return (
    <>
    <MenuBar />
      <div className=' p-0 absolute top-0 left-0 right-0 text-black bottom-0 flex'>
        <div className=' max-w-[600px] w-full flex justify-center items-center col-span-5  '>
            <div className='max-w-md sm:w-[480px] lg:w-[560px] transition-all duration-200'>
            <div className='text-xl py-6 pb'>Log in to your Account</div>
            <div className='pb-4'>Don&apos;t have an account? <span className=' text-primary'>Sign Up</span></div>
            <LoginForm />
            </div>
        </div>
        <div className=' flex-1 col-span-7 h-full w-full login-bg'>
            {/* <Image src={'/trading.jpg'} alt='' width={1000} height={1000} className='' /> */}
        </div>
    </div>
    </>
  )
}

export default LoginPage