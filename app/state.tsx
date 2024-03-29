"use client"



import React, { Dispatch as Dis, PropsWithChildren, createContext, useReducer, useState } from 'react'

var init: Dis<any> = ()=> {}

export const Context = createContext({user:'', account: ''})
export const Dispatch = createContext(init)


const al = {
  user: "hey",
  account: "hi"
}


function reducer(state:{user:string, account:string}, action: {type:string, payload:any}) {
  console.log('dispatched');
  
  switch (action.type) {
    case 'update':
      return {...state, ...action.payload}
      break;
  
    default:
      return al
      break;
  }
}


function Provider({children}: PropsWithChildren) {
  const [val, setVal] = useState(al)
  const [state, dispatch] = useReducer(reducer, al)

  return (
   <Dispatch.Provider value={dispatch}>
     <Context.Provider value={state}>
      {children}
    </Context.Provider>
   </Dispatch.Provider>
  )
}

export default Provider