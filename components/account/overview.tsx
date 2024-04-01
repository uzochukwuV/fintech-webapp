"use client";

import React, { useContext } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {

  ArrowDownRight,
  ArrowRightIcon,
  BellDotIcon,

  GiftIcon,
  LineChartIcon,
  LogOut,
  LogOutIcon,
  MenuSquareIcon,

  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Context, Dispatch } from "@/app/state";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Menu from "./menu";
import { logout } from "@/lib/auth";


function Overview({ user, account }: { user: any; account: any }) {
  const context = useContext(Context)
  const dispatch = useContext(Dispatch)

  
  
  React.useEffect(() => {

    
    
    return dispatch({type: 'update', payload: {user, account}})
    
  }, [])
  
 
  const router = useRouter()
  


  return (
    <>
      <Menu  />
      {/*  */}
      {/* <div className="flex-1 w-full px-6 py-4">
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
        </div> */}

        {/*  */}
        <section className=" p-2 sm:p-4 md:p-8 lg:p-12">
          <div className="greetings transition-all flex justify-between gap-10 px-6 py-10 md:pt-0 md:px-0 flex-col md:flex-row text-black">
            <div>
              <p>Welcome !</p>
              <div className=" sm:space-x-6 py-1">
              <h2 className=" font-medium inline-block text-3xl antialiased pr-2">{context.user.firstName} {context.user.lastName}</h2>
              <Button>My Plans <ArrowDownRight></ArrowDownRight> </Button>
              </div>
              <p className=" text-slate-500 pt-2">At a glance summary of your investment account. Have fun!</p>
            </div>
            <div className="activeplan">
                <Card className=" bg-gray-50 p-4 min-w-[250px] capitalize relative text-black border-0 ">
                  
                  {/* <CardHeader>My active PLans</CardHeader> */}
                  <CardDescription> My active PLans</CardDescription>
                  <CardTitle className=" text-green-600 py-2 text-lg font-medium"> Silver 4.56% for 21 Days</CardTitle>
                  <CardDescription className="flex gap-4">
                    <ArrowRightIcon />
                    Check Details
                  </CardDescription>
                  <div className=" absolute bottom-0 right-1 left-1 border-b-2 border-b-green-400 "></div>
                </Card>
            </div>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-black px-6 md:px-0 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
          <div className="p-6  bg-gray-50 text-black shadow-sm rounded-xl">
            <div className="flex text-black justify-between">
              <div className=" text-slate-400">
                <p>Total Balance</p>
              </div>
              <div>
                <Wallet />
              
              </div>
            </div>
            <div className=" py-2 ">
              <p className="font-semibold text-3xl">
                $<span>{context.account.balance.toFixed(2).toString()}</span>
              </p>
              <p className=" text-gray-400 text-xs "> <span className=" text-green-400">+20% </span> from last month</p>
            </div>
          </div>

          <div className="p-6  bg-gray-50 shadow-sm rounded-xl">
            <div className="flex justify-between">
              <div className=" text-slate-400">
                <p>Subscriptions</p>
              </div>
              <div>
                <Users />
              </div>
            </div>
            <div className=" py-2 ">
              <p className="font-bold text-3xl">
                $<span>{context.account.tradeBalance.toFixed(2).toString()}</span>
              </p>
              <p className=" text-gray-400 text-xs"><span className=" text-green-400">+2.40% </span> from last month</p>
            </div>
          </div>

          <div className="p-6  bg-gray-50 shadow-sm rounded-xl">
            <div className="flex justify-between">
              <div className=" text-slate-400">
                <p>Bonus</p>
              </div>
              <div>
                <GiftIcon />
              </div>
            </div>
            <div className=" py-2 ">
              <p className="font-bold text-3xl">
                $<span>{context.account?.bonus?.toFixed(2).toString()}</span>
              </p>
              <p className=" text-gray-400 text-xs"><span className=" text-green-400">+3000% </span> from last month</p>
            </div>
          </div>

          <div className="p-6  bg-gray-50 shadow-sm rounded-xl">
            <div className="flex justify-between">
              <div className=" text-slate-400">
                <p>Referral</p>
              </div>
              <div>
                <UserCheck />
              </div>
            </div>
            <div className=" py-2 ">
              <p className="font-bold text-3xl">
                $<span>{context.account?.referralBonus?.toFixed(2).toString()}</span>
              </p>
              <p className=" text-gray-400 text-xs"><span className=" text-green-400">0% </span> from last month</p>
            </div>
          </div>
        </div>
        {/*  */}
          <BalanceOverview />
        </section>

        </>
   
  );
}

export default Overview;



function BalanceOverview() {
  const {user, account} = useContext(Context)
  const router = useRouter()
  return (
    <section className=" bg-slate-50 flex flex-wrap flex-col md:flex-row ">
      <div className="balance min-w-[300px] flex-1 p-6 bg-white h-[75vh] flex flex-col ">
        <div className=" h-20 border-b-2">
          <p className=" text-slate-500">Balance in Account</p>
          <p className=" text-2xl text-black ">12,349.90</p>
        </div>
        <div className=" pt-2">
          <div className="flex justify-between text-slate-700 py-2">
            <p>Available Funds</p>
            <p>105.4</p>
          </div>
          <div className="flex justify-between border-b text-slate-700 py-2">
            <p>Invested Funds</p>
            <p>1050.4</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>Total Funds</p>
            <p>1252.4</p>
          </div>
        </div>
        {
          user._id ? (
            <div className=" flex-1 mt-10 space-y-2 flex flex-col justify-end items-start text-end">
          <Button className=" w-full text-sm bg-green-400 ">Withdraw Funds</Button>
          <Button className=" w-full text-sm">Deposit Funds</Button>
        </div>
          ): (
            <div className=" flex-1 mt-10 space-y-2 flex flex-col justify-end items-start text-end">
          <Button className=" w-full text-sm bg-green-400 ">Withdraw Funds</Button>
          <Button className=" w-full text-sm">Deposit Funds</Button>
        </div>
          )
        }
      </div>
      <div className="balance min-w-[300px] flex-1 p-6 bg-white h-[75vh] flex flex-col ">
        <div className=" h-20 border-b-2">
          <p className=" text-slate-500">This Months Profit </p>
          <p className=" text-2xl text-black ">129.90</p>
        </div>
        <div className=" pt-2">
          <div className="flex justify-between text-slate-700 py-2">
            <p>Profit</p>
            <p>105.4</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>Referrals </p>
            <p>105.4</p>
          </div>
          <div className="flex justify-between border-b text-slate-700 py-2">
            <p>Referral Rewards </p>
            <p>1050.4</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>Total Funds</p>
            <p>1252.4</p>
          </div>
        </div>
        {
          user._id ? (
            <div className=" flex-1 mt-10 space-y-2 flex flex-col justify-end items-start text-end">
          <Button className=" w-full text-sm bg-green-400 "  onClick={()=> router.push(`/account/${user._id}/invest`)}>Invest and Earn</Button>
          <Button className=" w-full text-sm text-slate-500">Earn up to $25  <span className="ps-2 text-black"> Refer Friends</span> </Button>
        </div>
          ): (
            <div className=" flex-1 mt-10 space-y-2 flex flex-col justify-end items-start text-end">
          <Button className=" w-full text-sm bg-green-400 " >Invest and Earn</Button>
          <Button className=" w-full text-sm text-slate-500">Earn up to $25  <span className="ps-2 text-black"> Refer Friends</span> </Button>
        </div>
          )
        }
      </div>
      <div className="balance min-w-[300px] flex-1 p-6 bg-white h-[75vh] flex flex-col ">
        <div className=" h-20 border-b-2">
          <p className=" text-slate-500">My Investments</p>
          <p className=" text-2xl text-black ">349.90    <span>Active</span></p>
        </div>
        <div className=" pt-2">
          <div className="flex justify-between text-slate-700 py-2">
            <p>Available Funds</p>
            <p>105.4</p>
          </div>
          <div className="flex justify-between border-b text-slate-700 py-2">
            <p>Invested Funds</p>
            <p>1050.4</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>Total Funds</p>
            <p>1252.4</p>
          </div>
        </div>
        <div className=" flex-1 mt-10 space-y-2 flex flex-col justify-end items-start text-end">
          <Button className=" w-full text-sm bg-green-400 "  onClick={()=> router.push(`/account/${user._id}/plans`)}>See all Investments</Button>
          <Button className=" w-full text-sm">Chat MD</Button>
        </div>
      </div>
    </section>
  )
}




export  function Transactions() {
  return (
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
  )
}
