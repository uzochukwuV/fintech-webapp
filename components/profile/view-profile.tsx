"use client"

import { Context } from '@/app/state'
import Link from 'next/link'
import React, { useContext } from 'react'

function Profile() {
    const {user, account} = useContext(Context)
  return (
    <div>
        <h1>Username</h1>
        <Link href={`/account/${user._id}/profile/edit`} >Edit Profile</Link>
        <section className=" max-w-[800px] ">
        <h1 className=" text-3xl font-medium text-black mt-4">Edit Profile </h1>

          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12 capitalize antialiased">

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2 capitalize">
                    {user.username}
                  </div>
                </div>

                

                {/* <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div> */}

               
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block  text-sm font-medium leading-6 text-gray-500 capitalize"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    {user.firstName}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-500 capitalize"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    {user.lastName}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-500 capitalize"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    {user.email}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-500 capitalize"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    {user.country}
                  </div>
                </div>

                

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-500 capitalize"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    {user.country}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-500 capitalize"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    {user.country}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-500 capitalize"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    {user.country}
                  </div>
                </div>
              </div>
            </div>
          </div>


    </section>
    </div>
  )
}

export default Profile