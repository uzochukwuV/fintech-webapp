"use client"

import { Dispatch } from '@/app/state'
import React, { useContext, useEffect } from 'react'

function IsAuthenticated({params}: {params: {id: string}}) {

    const dispatch = useContext(Dispatch)
    

    useEffect(()=> {
        fetch('api/user/get', {
          method: "POST",
          body: JSON.stringify({id: params.id})
        }).then((res)=> res.json())
        .then((val)=>dispatch({type: "update", payload: {...val} }) )
    }, [params.id])


  return (
    <div></div>
  )
}

export default IsAuthenticated