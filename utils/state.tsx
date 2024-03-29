"use client"

import React, { Dispatch, PropsWithChildren, createContext, useReducer } from 'react'
import { initialState, reducer } from './constants';

var disp:Dispatch<any> = ()=>{}
export const UserState = createContext(initialState)
export const UserDispatch = createContext(disp)

  export default function UserStateContext({children}: PropsWithChildren) {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state, dispatch);
    
  
    const increment = () => dispatch({ type: 'change', payload: {email: "User"} });
     const decrement = () => dispatch({ type: 'decrement', payload: {username: "Person"} }); 
     const reset = () => dispatch({ type: 'reset' });
    
    return ( 
      <UserState.Provider value={state} >
        <UserDispatch.Provider value={dispatch}>
         
        {children}
        </UserDispatch.Provider>
      </UserState.Provider>
    ); 
  }