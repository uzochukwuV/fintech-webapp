"use client"

import getAllUsers from '@/lib/admin'
import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'

function AllUsers() {
    const {data, error, isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async()=> {
            const users = await getAllUsers();
            if(users.error) throw new Error(users.error)
            if(users.success) return users.success
        },
    })

    if(isLoading) return <>Loading ........</>
    console.log(data);
    if(data)
  return (
    <div>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((user)=> 
            <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.username}
                </th>
                <td className="px-6 py-4">
                    {user.email}
                </td>
                <td className="px-6 py-4">
                    {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4">
                    {user.phoneNumber}
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>)}
            
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default AllUsers