"use client"

import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import { useToast } from "../ui/use-toast"
import { useState } from "react"


export function Deposit() {
  const [deposit, setDeposit] = useState(true)
  const {toast} = useToast()
  const handleClick = (e: string)=> {
    const clipboard = navigator.clipboard
    clipboard.writeText(e)
    toast({title: "Copied"})
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className=" bg-slate-50 border-0">Deposit</Button>
      </DialogTrigger>
      {/* <Address handleClick={handleClick} /> */}
      {
        deposit ? <DepositTransaction modalControl={setDeposit} /> : <Address handleClick={handleClick} modalControl={setDeposit}  />
      }
    </Dialog>
  )
}






function Address({handleClick, modalControl}: {handleClick: (key: string)=>void, modalControl: Dispatch<SetStateAction<boolean>>}) {
  return (
    <DialogContent className="sm:max-w-md bg-slate-50">
        <DialogHeader>
          <DialogTitle>Choose your preferred method</DialogTitle>
          <DialogDescription className="  text-black">
            Deposit direct to the address (Bep20)
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr- text-gray-500 text-sm font-normal">
              Your USDT Address (Most Preferrable)
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
              className=" bg-white text-black"
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={()=>handleClick("USDT")}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr- text-gray-500 text-sm font-normal">
              Your BTC Address
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
              className=" bg-white text-black"
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={()=>handleClick("BTC")}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr- text-gray-500 text-sm font-normal">
              Your Eth Address
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
              className=" bg-white text-black"
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={()=>handleClick("ETH")}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={()=>modalControl((prev)=> !prev)} >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
  )
}


function DepositTransaction({modalControl}:{modalControl: Dispatch<SetStateAction<boolean>>}) {
  return (
    <DialogContent className="sm:max-w-md bg-slate-100 text-black">
        <DialogHeader>
          <DialogTitle>Deposit Transaction </DialogTitle>
          <DialogDescription>
            Transactions take 3 confirmations to reflect. We will await your deposit.
          </DialogDescription>
        </DialogHeader>
       <form action="" method="post">
       <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-4">
            <Label htmlFor="link" className="sr- text-gray-500 text-sm font-normal">
              Amount to deposit (USDT)
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="min 50 USDT"
              min={50}
              max={100000}
              className=" bg-white"
              required
            />
          </div>
          
        </div>
        <Button type="submit" size="lg" className="px-3 my-4 bg-slate-600 text-white hover:bg-slate-500" onClick={()=>{modalControl(false)}}>
            <span className="sr-only">Copy</span>
            <p>Generate transaction</p>
          </Button>
        </form> 
    </DialogContent>
  )
}



