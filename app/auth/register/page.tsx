import React from 'react'
import RegisterForm from '@/components/auth/register-form';
import { MenuBar } from '@/components/home/menu-bar';
import Link from 'next/link';


function RegisterPage() {
  return (
    <>
    <MenuBar />
      <div className=' px-4 md:grid md:grid-cols-12 absolute text-black   md:pt-0 left-0 right-0 bottom-0 top-20  justify-center items-center'>
        <div className='w-full md:col-span-6  flex justify-center items-center flex-col  transition-all duration-200'>
           <div>
           <div className='text-xl py-6 pb'>Register an Account</div>
            <div className='pb-4'>Already have an account? <span className=' text-primary hover:border-b-slate-700 hover:border-b-2 border-b-transparent hover:translate-y-2'>
                <Link className='text-primary underline underline-offset-2' href={"/auth/login"} >Log In</Link>
              </span></div>
                <RegisterForm />
           </div>
        </div>
        <div className=' flex-1 col-span-6 h-full w-full login-bg hidden md:flex'>
            {/* <Image src={'/trading.jpg'} alt='' width={1000} height={1000} className='' /> */}
        </div>
    </div>
    </>
  )
}

export default RegisterPage;