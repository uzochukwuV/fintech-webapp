"use client"

import Link from 'next/link'
import React from 'react'

function Error() {
  return (
    <div className=' flex justify-center items-center text-black text-5xl'>
            Error go back to 
            <Link href={"/"} >Home Page</Link>
    </div>
  )
}

export default Error