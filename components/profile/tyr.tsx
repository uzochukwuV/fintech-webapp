"use client"


import { CameraIcon as PhotoIcon, UserCircleIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { useContext } from 'react';
import { Context } from '@/app/state';
import ChangePassword from './changePassword';

// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Trx() {
    const {user, account} = useContext(Context)
  return (
    <section>
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1  ring-gray-300    sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    defaultValue={user.username as string}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 focus:outline-none focus:border-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={user.userType}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
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

            {/* <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <Input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder='Hover man'
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={user.email as string}
                  className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  defaultValue={user.country as string}
                  className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="street-address"
                  defaultValue={user.state as string}
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="city"
                  id="city"
                  defaultValue={user.state as string}
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="region"
                  id="region"
                  defaultValue={user.state as string}
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  defaultValue={user.state as string}
                  className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
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

    
    </section>
  )
}
