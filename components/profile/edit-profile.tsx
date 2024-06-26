"use client";

import { CameraIcon as PhotoIcon, UserCircleIcon } from "lucide-react";
import { Input } from "../ui/input";
import { ChangeEvent, FormEvent, useContext, useEffect, useLayoutEffect, useState } from "react";
import { Context, Dispatch } from "@/app/state";

import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { UserInterface } from "@/utils/constants";

// import {  useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
//   } from "../ui/form";

// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


interface Profile {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    country: string,
    state: string,
    zip: string,
    city: string,
}



export default function EditProfile() {
  const { user, account } = useContext(Context);
  
  const [profile, setProfile] = useState<Profile>({username: '', email: '', city: "", country: '', state:'', zip: "", firstName: '', lastName: ''})
  const {toast} = useToast()
  const dispatch = useContext(Dispatch)
  const router = useRouter()
  const OnChangeHandler = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=> {
    e.preventDefault()
    

    const {value, name} = e.target

    setProfile({...profile, [name]: value})
  }

  

  

  const OnSubmitHandler = (e: FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    console.log(profile);
    
    if(true){
        fetch("/api/user/update-profile", {
            method: "POST",
            body: JSON.stringify({id: user?._id!, ...profile})
        }).then((res)=> res.json()
        ).then((val)=> {
          console.log(val);
          
          dispatch({type: "update", payload: val as UserInterface})
          
          toast({
            title: "Profile Update Sucessful",
          })

          router.back()
          
        }
        )
        .catch((e)=> console.log(e)
        )
    }
}
  return (
    <section className=" max-w-[800px] mx-auto px-4 sm:px-6 md:px-10">
        <h1 className=" text-3xl font-medium text-black mt-4">Edit Profile </h1>
        <form  method="POST" onSubmit={OnSubmitHandler}>
          <div className="space-y-12">
            <div className="">

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1  ring-gray-300    sm:max-w-md">
                      {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                      <Input
                      onChange={OnChangeHandler}
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        value={profile.username}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 focus:outline-none focus:border-0 sm:text-sm sm:leading-6"
                        
                      />
                    </div>
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
                      <Input
                      onChange={OnChangeHandler} id="file-upload" name="file-upload" type="file" className="sr-only" />
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
              

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <Input
                    onChange={OnChangeHandler}
                    value={profile.firstName}
                      type="text"
                      name="firstName"
                      
                      id="first-name"
                      
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <Input
                    onChange={OnChangeHandler}
                      type="text"
                      value={profile.lastName}
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <Input
                    onChange={OnChangeHandler}
                      id="email"
                      value={profile.email}
                      disabled
                      name="email"
                      type="email"
                      autoComplete="email"
                      
                      className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      value={profile.country}
                      autoComplete="country-name"
                    
                      className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <Input
                    onChange={OnChangeHandler}
                      type="text"
                      name="city"
                      id="city"
                      value={profile.city}
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <Input
                    onChange={OnChangeHandler}
                      type="text"
                      name="state"
                      id="region"
                      value={profile.state}
                      autoComplete="address-level1"
                      className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <Input
                    onChange={OnChangeHandler}
                      type="text"
                      name="zip"
                      id="postal-code"
                      autoComplete="postal-code"
                      value={profile.zip}
                      className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
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
     
    </section>
  );
}
export const formSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: "mustbe more than 20 characters",
      })
      .max(20),
    about: z.string().min(0).max(100, {
      message: "must not be more than 100 characters",
    }),
    email: z
      .string()
      .min(2, {
        message: "mustbe more than 50 characters",
      })
      .max(50),
    firstName: z
      .string()
      .min(2, {
        message: "mustbe more than 20 characters",
      })
      .max(20),
    lastname: z
      .string()
      .min(2, {
        message: "mustbe more than 20 characters",
      })
      .max(20),
    country: z
      .string()
      .min(2, {
        message: "mustbe more than 20 characters",
      })
      .max(20),
    street: z
      .string()
      .min(2, {
        message: "mustbe more than 20 characters",
      })
      .max(20),
    city: z
      .string()
      .min(2, {
        message: "mustbe more than 20 characters",
      })
      .max(20),
    state: z
      .string()
      .min(2, {
        message: "mustbe more than 20 characters",
      })
      .max(20),
    zip: z
      .string()
      .min(2, {
        message: "mustbe more than 20 characters",
      })
      .max(20),
  });