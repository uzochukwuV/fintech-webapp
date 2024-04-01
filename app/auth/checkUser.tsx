"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CheckUser ({params}: {params: {session: string| undefined}}) {
    const router = useRouter()
    if(params.session) router.push('/')
  return (
    <div></div>
  )
}
