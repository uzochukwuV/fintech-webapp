"use client"

import { Context, Dispatch } from '@/app/state'
import React, { useContext, useEffect, useMemo } from 'react'

function IsAuthenticated({id}:  {id: string}) {

    const dispatch = useContext(Dispatch)
    
    

    useMemo(() =>  
      fetch("/api/user/get", {
       method: 'POST',
      
       body: JSON.stringify({id: id})
     }).then((res)=> res.json()
     ).then((value)=> {
      console.log(value);
      dispatch({type: 'update', payload: value})
      
     }), [])
  
  


  return (
    <div></div>
  )
}

export default IsAuthenticated