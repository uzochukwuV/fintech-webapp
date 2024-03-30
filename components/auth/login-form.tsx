"use client";

import React, { useContext, useState } from "react";
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
import { LoaderCircleIcon, SpadeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { Toast } from "../ui/toast";
import { ToastDescription } from "@radix-ui/react-toast";
import { Dialog, DialogDescription } from "../ui/dialog";
import { Context } from "@/app/state";


export const formSchema = z.object({
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
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });
  const [isLoading, setIsLoading]= useState(false)
  const router = useRouter()
  const {toast} = useToast() 
  
  const context = useContext(Context)


  React.useEffect(() => {
    console.log(context);
    
  }, [])

  async function onSubmit(values: z.infer<typeof formSchema>) {


    

    setIsLoading(true)
    console.log(values);
    await login(values).then((user)=> {
      console.log(user);
      if (user) {
        toast({
          title: "login Successful",
        })
        router.push(`/account/${user._id}/`)
      }
      
    }).catch((e)=> {
      console.log(e);
      setIsLoading(false)
    })
    setIsLoading(false)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} method="POST" className="space-y-4">
        
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
                    className=" bg-gray-50 text-black"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
         

        <Button type="submit" disabled={isLoading}>Log in  {
        isLoading && <>
            <LoaderCircleIcon className=" animate-spain" />
            
          
        </>
      }   </Button>
      </form>
     
    </Form>
  );
}
