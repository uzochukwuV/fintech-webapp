"use client"



import { AccountInterface, UserInterface } from '@/utils/constants'
import React, { Dispatch as Dis, PropsWithChildren, createContext, useReducer, useState } from 'react'




const UserType: UserInterface ={
  username:"",
  email: "",
  firstName: "",
  lastName: "",
}

const AccountType : AccountInterface = {
  _user: "",
  balance: 0,
  bonus: 0,
  tradeBalance: 0,
  plan: ''
}

var init: Dis<any> = ()=> {}

export const Context = createContext({user:UserType, account: AccountType})
export const Dispatch = createContext(init)


const al = {user:UserType, account: AccountType}


function reducer(state:{user:string, account:string}, action: {type:string, payload:any}) {
  console.log('dispatched');
  
  switch (action.type) {
    case 'update':
      return {...state, ...action.payload}
      break;

    case "delete": 
        return {...al}
  
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