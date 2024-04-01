"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { login, register } from "@/lib/auth";
import { SpadeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";


export const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "mustbe more than 20 characters",
    })
    .max(100),
  password: z
    .string()
    .min(2, {
      message: "mustbe more than 20 characters",
    })
    .max(20),
  email: z
    .string()
    .min(2, {
      message: "mustbe more than 20 characters",
    })
    .max(50),
  firstName: z
    .string()
    .min(2, {
      message: "mustbe more than 20 characters",
    })
    .max(20),
  lastName: z
    .string()
    .min(2, {
      message: "mustbe more than 20 characters",
    })
    .max(20),
  // date: z
  // .string()
  // .min(2, {
  //   message: "mustbe more than 20 characters",
  // })
  // .max(20),
  // referal: z
  // .string()
  // .min(2, {
  //   message: "mustbe more than 20 characters",
  // })
  // .max(20),
  confirmpassword: z
    .string()
    .min(2, {
      message: "mustbe more than 20 characters",
    })
    .max(20),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      confirmpassword: "",
      firstName: "",
      lastName: "",
    },
  });
  const [isLoading, setIsLoading]= useState(false)
  const router = useRouter()
  const {toast} = useToast()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log(values);
    await register(values).then((user)=> {
      console.log(user);
      if (user) {
        
        toast({
          title: "You have registered successfully",
          description: "Please login",
        })
        
        router.push('/auth/login')
      }
      
    }).catch((e)=> {
      console.log(e.message);
      setIsLoading(false)
    })
    setIsLoading(false)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {
          isLoading && (
            <div className="fixed top-20 left-0 right-0 bottom-0 backdrop-blur-sm z-10 flex justify-center items-center">
              <div className="relative">
                <SpadeIcon fontSize={30} className=" animate-spin mx-auto" />
                <div className=" text-xs">Loading ........</div>
              </div>
        </div>
          )
        }
        <div className="flex gap-4 flex-col sm:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="text"className=" bg-gray-50" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="text" className=" bg-gray-50" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="text" className=" bg-gray-50" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="email" className=" bg-gray-50" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    type="password"
                    autoComplete="new-password"
                    className=" bg-gray-50"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    type="password"
                    autoComplete="new-password webauthn"
                    className=" bg-gray-50"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isLoading}>Register</Button>
      </form>
    </Form>
  );
}
