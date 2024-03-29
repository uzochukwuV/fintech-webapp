"use client"
import React, { createContext, useContext, useReducer, useState } from "react";
import { Roboto } from "next/font/google";



const Context = createContext({color: '', pet: ""})


const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});


const types = {
  PET: 'PET',
  COLOR: 'COLOR',
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case types.PET:
      return { ...state, pet: action.value }
    case types.COLOR:
      return { ...state, color: action.value }
  }
}

const initialState = {
  color: 'black',
  pet: 'cat',
}

export default function Page({user, account}:{user:any, account:any}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [date, setDate] = useState(new Date(Date.now()).toUTCString());
  const contextUser = useContext(Context)

  return (
    <Context.Provider value={state}>
      <Peek />
    </Context.Provider>
  );
}


const Peek = ()=> {
  const text = useContext(Context)
  return (
    <div className=" text-black">
      {text.color}
    </div>
  )
}




