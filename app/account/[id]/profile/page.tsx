"use client"

import { Dispatch } from '@/app/state'
import Menu from '@/components/account/menu'
import Personal from '@/components/profile/personal'
import React, { useContext, useEffect } from 'react'

 function Page({ params }: { params: { id: string } }) {
  const dispatch = useContext(Dispatch)
  
  useEffect(() => {
    let value;
    const response = fetch("/api/user/get", {
      method: "POST",
      body: JSON.stringify({id: params.id})
    }).then((res)=> res.json())
    response.then((val)=> dispatch({type: "update", payload: {...val}})
    )
    
  }, [params.id])
  return (
    <div>
       
        <Personal />
    </div>
  )
}

export default Page