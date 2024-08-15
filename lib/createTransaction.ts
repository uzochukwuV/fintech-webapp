"use server"

import Account from "@/models/account"
import connectToDB from "./mongoose"
import Plan from "@/models/plan"
import { PlanDocumnet } from "@/models/plan"
import Transaction, { TransactionDocumnet } from "@/models/transaction"

// _account: AccountDocument['_id'],
//     type: 'DEPOSIT'|'WITHDRAW'|'SUBSCRIBE'|'OTHER',
//     amount: Number,
//     date: Date,
//     message?: String,
//     status: 'PENDING'|'COMPLETED'|'ERROR',
//     isActive?: Boolean,
//     next?: Number,

// _account: AccountDocument['_id'],
//     _plan?: PlanDocumnet['_id'],
//     type: 'DEPOSIT'|'WITHDRAW'|'SUBSCRIBE'|'OTHER',
//     plan?: "SILVER" | "GOLD" | "BASIC" | "DIAMOND",
//     amount: Number,
//     date: Date,
//     message?: String,
//     status: 'PENDING'|'COMPLETED'|'ERROR',
//     isActive?: Boolean,
//     next?: Number,

export async function SubscribePlan({accountID, type, amount,plan }: {accountID: string, type: string, amount: number, plan?: string}){
    await connectToDB()

    if(plan){
     var planObj: PlanDocumnet| null = await Plan.findOne({type: plan});
     if(!planObj) return null;
     

     var createTransaction: TransactionDocumnet| null = await Transaction.create({_account: accountID, type: plan, _plan: planObj!, amount: amount, date: new Date(Date.now()), isActive: true})

     return createTransaction;


    }
    return null
}