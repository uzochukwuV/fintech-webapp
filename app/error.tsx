"use client"
import Image from 'next/image'
import React from 'react'

function Error(props: any) {
  return (
    <div className='  top-20 bottom-0 left-0 right-0'>
        <div className=' h-full p-8 w-full flex justify-center flex-col items-center'>
            <Image src={"/svg/page_not_found.svg"} alt='not found' height={600} width={540} ></Image>
            <p className=' my-4 text-2xl text-black'>Error Ocurred, Not your fault</p>
        </div>

    </div>
  )
}

export default Error