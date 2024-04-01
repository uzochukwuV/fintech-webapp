"use client"

import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import Image from 'next/image'
import { Context } from '@/app/state'

interface Password {
    password1: string,
    password2: string,
}



function ChangePassword() {
    const [password, setPassword] = useState<Password>({password1:"", password2: ""})
    const {user, account} = useContext(Context)

    const submitHandler = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        if(password.password1 == password.password2){
            fetch("/api/user/password-change", {
                method: "POST",
                body: JSON.stringify({id: user?._id!, password: password.password1, _id: user})
            }).then((res)=> res.json()
            ).then((val)=> console.log(val)
            )
            .catch((e)=> console.log(e)
            )
        }
    }
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        
        
        const {value, name} = e.target
        if(name == "password1"){
            setPassword({...password, password1: value})
        }else {
            setPassword({...password, password2: value})
        }

    }
  return (
    <section className="bg-transparent darkl:bg-gray-900">
  <div className="flex flex-col items-start justify-start   mx-auto md:h-screen lg:py-0">
      
      <div className="w-full p-6 bg-white rounded-lg shadow darkl:border md:mt-0 sm:max-w-md darkl:bg-gray-800 darkl:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl darkl:text-white">
              Change Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" method='POST' onSubmit={submitHandler} action="#">
              
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 darkl:text-white">New Password</label>
                  <input type="password"  value={password.password1} onChange={OnChangeHandler} name="password1" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkl:bg-gray-700 darkl:border-gray-600 darkl:placeholder-gray-400 darkl:text-white darkl:focus:ring-blue-500 darkl:focus:border-blue-500" required  />
              </div>
              <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 darkl:text-white">Confirm password</label>
                  <input type="confirm-password" value={password.password2} onChange={OnChangeHandler} name="password2" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkl:bg-gray-700 darkl:border-gray-600 darkl:placeholder-gray-400 darkl:text-white darkl:focus:ring-blue-500 darkl:focus:border-blue-500" required />
              </div>
             
              {/* <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darkl:bg-primary-600 darkl:hover:bg-primary-700 darkl:focus:ring-primary-800">Reset passwod</button> */}
              <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="reset"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
          </form>
      </div>
  </div>
</section>
  )
}

export default ChangePassword

