"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function CheckUser ({params}: {params: {session: string| undefined}}) {
    const router = useRouter()
    const [session, setSession] = useState<string|undefined>()
    
    
    useEffect(() => {
        setSession(params.session)
        if(params.session) router.push('/')
    }, [session])
    
  return (
    <div></div>
  )
}
