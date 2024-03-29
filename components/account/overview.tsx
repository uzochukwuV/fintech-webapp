"use client";

import React, { useContext } from "react";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { GroupIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  ArrowBigDownDash,
  ArrowBigUpDash,
  BellDotIcon,
  DollarSignIcon,
  GiftIcon,
  LogOut,
  LogOutIcon,
  MenuSquareIcon,
  User2Icon,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BarChartComponent from "@/components/account/barchart";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Deposit from "./deposit";
import { useRouter } from "next/navigation";
import { Context, Dispatch } from "@/app/state";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

function Overview({ user, account }: { user: any; account: any }) {
  const context = useContext(Context)
  const dispatch = useContext(Dispatch)
  React.useEffect(() => {
    console.log(context);
    console.log(dispatch);
    
    
  }, [])
  
 
  const router = useRouter()
  const logout = ()=> {
      fetch('/api/logout').then((res)=> res.json()
      ).then((val)=> console.log(val.status)
      )
      router.replace("/auth/login")
  }

  const changeUser =()=> dispatch({type: "update", payload: {user: "kele"}});

  return (
    <div
      className={cn(
        " min-h-screen text-sm antialiased  text-white  flex flex-col  absolute top-0 right-0 left-0  ",
        roboto.className
      )}
    >
      <div className=" h-16   flex items-center  justify-between w-full bg-gray-900 px-6">
        <div className="flex gap-4 items-center ">
          <div className=" px-2 py-2 rounded-sm w-40 md:w-60 flex gap-2 font-medium">
          <div className="flex">
                  {/* <PersonIcon className=" font-medium" fontWeight={700} /> */}
                  <p className=" text-3xl">STOXAFX</p>
                </div>
          </div>
          <div className="md:flex gap-10 uppercase items-center text-base font-medium hidden ">
            <div>
              <p>Overview</p>
            </div>
            <div>
              <p>Plans</p>
            </div>
            <div>
              <p>Invest</p>
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <MenuSquareIcon />
        </div>
        <div className="  justify-end gap-10 w-3/12 items-center hidden md:flex">
          <div className="flex gap-4 items-center">
          
          <Avatar className=" bg-indigo-500">
            <AvatarImage src="" />
            <AvatarFallback className=" bg-indigo-600">
              <p>P</p>
            </AvatarFallback>
          </Avatar>

          <div>
            <p className=" text-xs">Verified</p>
            <p>Full name</p>
          </div>


          </div>
          <div className="flex gap-6 items-center">
            <div className=" rounded-full p-2 hover:bg-gray-500">
              <BellDotIcon color="white" ascent='5'  />
            </div>
            <div className=" ">
              <Button className=" bg-transparent rounded-full p-2 hover:bg-gray-500" onClick={logout} ><LogOutIcon color="white" /></Button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex-1 w-full px-6 py-4">
        <div className="w-full flex justify-between items-center py-2">
          <div>
            <h2 className=" font-bold text-lg md:text-3xl ">Dashboard</h2>
          </div>
          <div className=" gap-2 flex">
           
            <div className="flex gap-2">
              <Button className="h-9 text-xs px-3 md:px-4 md:text-sm " onClick={changeUser}>
                <ArrowBigUpDash className=" text-indigo-600" />
                Deposit{" "}
              </Button>
              <Button className="h-9 text-xs px-3 md:px-4 md:text-sm">
                <ArrowBigDownDash />
                Withdraw{" "}
              </Button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
          <div className="p-6  bg-gray-50 shadow-sm rounded-xl">
            <div className="flex text-black justify-between">
              <div>
                <p>Total Balance</p>
              </div>
              <div>
                <Wallet />
                {context.user}
              </div>
            </div>
            <div className=" py-2 ">
              <p className="font-bold text-2xl">
                $<span>{account?.balance}</span>
              </p>
              <p className=" text-gray-400 text-xs">+20% from last month</p>
            </div>
          </div>

          <div className="p-6  bg-gray-50 shadow-sm rounded-xl">
            <div className="flex justify-between">
              <div>
                <p>Subscriptions</p>
              </div>
              <div>
                <Users />
              </div>
            </div>
            <div className=" py-2 ">
              <p className="font-bold text-2xl">
                $<span>{account?.tradeBalance}</span>
              </p>
              <p className=" text-gray-400 text-xs">+20% from last month</p>
            </div>
          </div>

          <div className="p-6  bg-gray-50 shadow-sm rounded-xl">
            <div className="flex justify-between">
              <div>
                <p>Bonus</p>
              </div>
              <div>
                <GiftIcon />
              </div>
            </div>
            <div className=" py-2 ">
              <p className="font-bold text-2xl">
                $<span>{account?.bonus}</span>
              </p>
              <p className=" text-gray-400 text-xs">+20% from last month</p>
            </div>
          </div>

          <div className="p-6  bg-gray-50 shadow-sm rounded-xl">
            <div className="flex justify-between">
              <div>
                <p>Referral</p>
              </div>
              <div>
                <UserCheck />
              </div>
            </div>
            <div className=" py-2 ">
              <p className="font-bold text-2xl">
                $<span>{account?.referralBonus}</span>
              </p>
              <p className=" text-gray-400 text-xs">+20% from last month</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full md:grid-cols-12 flex flex-col md:grid gap-6 md:grid-flow-row">
          
          <div className="p-6 col-span-7  bg-gray-50 rounded-lg  ">
            <div>
              <h3 className=" font-medium text-lg text-slate-700">Recent Transactions</h3>
              <p className=" text-xs text-gray-400">All Transactions 7 </p>
            </div>
            <div className="py-4 flex flex-col justify-center gap-6">
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-2">
                  <div className="avatar">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className=" font-medium">Username</h3>
                    <p className=" text-gray-400 text-xs">User Email</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center justify-between">
                    <h3 className=" text-lg font-medium ">+$50,000</h3>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Overview;
