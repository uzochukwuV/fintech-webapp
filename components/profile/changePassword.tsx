"use client"

import React from 'react'
import Image from 'next/image'

function ChangePassword() {
  return (
    <section className="bg-gray-50 darkl:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full p-6 bg-white rounded-lg shadow darkl:border md:mt-0 sm:max-w-md darkl:bg-gray-800 darkl:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl darkl:text-white">
              Change Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 darkl:text-white">New Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkl:bg-gray-700 darkl:border-gray-600 darkl:placeholder-gray-400 darkl:text-white darkl:focus:ring-blue-500 darkl:focus:border-blue-500" required  />
              </div>
              <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 darkl:text-white">Confirm password</label>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkl:bg-gray-700 darkl:border-gray-600 darkl:placeholder-gray-400 darkl:text-white darkl:focus:ring-blue-500 darkl:focus:border-blue-500" required />
              </div>
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 darkl:bg-gray-700 darkl:border-gray-600 darkl:focus:ring-primary-600 darkl:ring-offset-gray-800" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="font-light text-gray-500 darkl:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline darkl:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darkl:bg-primary-600 darkl:hover:bg-primary-700 darkl:focus:ring-primary-800">Reset passwod</button>
          </form>
      </div>
  </div>
</section>
  )
}

export default ChangePassword

