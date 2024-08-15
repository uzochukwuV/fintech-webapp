"use client"
import Image from 'next/image'
import React from 'react'

function Error(props: any) {
  return (
    <div className='  top-0 bottom-0 left-0 right-0'>
        <div className=' h-full w-full flex justify-center items-center'>
            <Image src={"/svg/not_found.svg"} alt='not found' height={300} width={240} ></Image>
        </div>

    </div>
  )
}

export default Error