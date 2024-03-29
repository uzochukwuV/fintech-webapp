import React from 'react'
import RegisterForm from '@/components/auth/register-form';
import { MenuBar } from '@/components/home/menu-bar';
import Link from 'next/link';


function RegisterPage() {
  return (
    <>
    <MenuBar />
      <div className=' px-4 absolute text-black top-60 md:top-20 pt-5 md:pt-0 left-0 right-0 bottom-0 flex justify-center items-center'>
        <div className='w-full max-w-md sm:w-[480px] lg:w-[560px] transition-all duration-200'>
            <div className='text-xl py-6 pb'>Register an Account</div>
            <div className='pb-4'>Already have an account? <span className=' text-primary hover:border-b-slate-700 hover:border-b-2 border-b-transparent hover:translate-y-2'>
                <Link href={"/auth/login"} >Sign Up</Link>
              </span></div>
                <RegisterForm />
        </div>
    </div>
    </>
  )
}

export default RegisterPage;