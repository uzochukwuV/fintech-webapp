import { bencrypt } from "@/lib/auth";
import connectToDB from "@/lib/mongoose";
import User from "@/models/user";
import { SubscribePlan } from "@/lib/createTransaction";
import Plan, { PlanDocumnet } from "@/models/plan";
import type { AnyKeys } from "mongoose";


export async function POST(req:Request){
    await connectToDB()
    const body = await req.json()
    console.log("body", body);

    const firstPlan = await Plan.create<PlanDocumnet>({percentage: 50, duration: 30, type: 'SILVER', minDeposit: 2000, maxDeposit:5000});

    try {

        const plan = await SubscribePlan({accountID: body.accountID, amount: body.amount, type: body.type, plan: body.plan})
        console.log(plan);
        
        return Response.json(plan, {
            status:200
        })
    } catch (error) {
        console.log(error);
        
        return Response.json({error: "could not make Plan"}, {
            status:400
        })
        
    }
    
    
}

// export  {handler as POST, handler as GET}