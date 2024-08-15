"use client";

import React, {
  Key,

  useContext,
  useMemo,
  useState,
} from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Context } from "@/app/state";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";


const plans = [
  {
    type: "BASIC",
    description: "Enjoy Entry level of inves and earn",
    percentage: "3.57",
    duration: 5,
    minDeposit: 500,
    maxDeposit: 2000,
  },
  {
    type: "Silver",
    description: "Best plan for users to invest and earn",
    percentage: "10.57",
    duration: 21,
    minDeposit: 1500,
    maxDeposit: 5000,
  },
  {
    type: "Diamond",
    description: "Advanced level of invest and earn",
    percentage: "3.57",
    duration: 30,
    minDeposit: 5000,
    maxDeposit: 10000,
  },
];

interface PlanInterface {
  _id?: String;
  type: String;
  description: String;
  percentage: String;
  duration: Number;
  minDeposit: Number;
  maxDeposit: Number;
  users?: String[];
}

function SubComponent() {
  
  const [data, setData] = useState([]);

  useMemo(
    () =>
      fetch("/api/plan", { method: "GET" })
        .then((res) => res.json())
        .then((value) => setData(value)),
    []
  );
  

  return (
    <section id="product" className=" px-12 py-10">
      <h1 className=" mx-auto text-center text-black text-3xl font-medium max-w-sm">
        {" "}
        Start a Journey
      </h1>
      <p className=" text-center text-slate-500 text-xs">
        We provide you with the best alternative so you can earn while you sleep
      </p>
      <div className="flex gap-10 flex-wrap justify-center rounded-2xl bg-slate-50 max-h-[600px] py-10 mt-6">
        {data.map((data: PlanInterface) => (
          <div key={data.type as Key}>
            <SubComponentPlan props={data} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function SubComponentOne() {

  
  

  return (
    <section id="product" className="px-2 md:px-12 py-10">
      <h1 className=" mx-auto text-center text-black text-3xl font-medium max-w-sm">
        {" "}
        Start a Journey
      </h1>
      <p className=" text-center text-slate-500 text-xs">
        We provide you with the best alternative so you can earn while you sleep
      </p>
      <div className="flex gap-4 md:gap-10 flex-wrap justify-center rounded-2xl bg-slate-50  lg:max-h-[600px]  scroll-smooth py-10 mt-6">
        {plans.map((data: PlanInterface, i) => (
          <div key={data.type as Key} className={cn("slide-in-from-left-[300px] break-after-page animate-in duration-700", i==1 ? "slide-in-from-right-[300px]": "slide-in-top-left-[300px]")} >
            <SubComponentPlan props={data} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubComponent;

function SubComponentPlan({ props }: { props: PlanInterface }) {
  const { user, account } = useContext(Context);
 
  var l = props.users?.find((value)=>value.toString().endsWith(`${user._id!}`) );
  
  
  
  

  const path = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const createTransaction = () => {
  

    const a = fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({
        planID: props._id,
        userID: user._id,
      }),
    }).then((res) => res.json());
  };

  return (
    <div>
      <div className="balance md:min-w-[300px] w-full rounded-lg flex-1 p-6 bg-white min-h-[75vh] flex flex-col ">
        <div className=" h-20 border-b-2 py-4 pb-6">
          <p className="text-2xl  text-black ">{props.type} </p>
          <p className="text-slate-500 ">{props.description}</p>
        </div>
        <div className=" pt-2">
          <div className="flex justify-between text-slate-700 py-2">
            <p>Percentage interest</p>
            <p className=" text-green-500">{props.percentage}%</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>Term days </p>
            <p>{props.duration.toString()}</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>min Deposit</p>
            <p>${props.minDeposit.toString()}</p>
          </div>
          <div className="flex justify-between text-slate-700 py-2">
            <p>max Deposit</p>
            <p>${props.maxDeposit.toString()}</p>
          </div>
          <div className="flex justify-between border-t border-dashed border-slate-300 text-slate-700 py-2">
            <p>Total Return </p>
            <p>${props.maxDeposit.toString()}</p>
          </div>
        </div>
        <div className=" flex-1 mt-10 space-y-2 flex flex-col justify-end items-start text-end">
          <Button
            onClick={createTransaction}
            disabled={
              l?.length! > 0
            }
            className={cn(
              " w-full text-sm text-slate-500 bg-slate-100 hover:text-black",
              l?.length! > 0 && " bg-green-500 text-slate-100"
            )}
          >
            Choose this plan{" "}
            <span
              className={cn(
                "ps-2 text-green-500",
                l?.length! > 0 && "  text-slate-100"
              )}
            >
              {" "}
              Now
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
