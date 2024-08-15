
import connectToDB from "@/lib/mongoose";

import Transaction from "@/models/transaction";




export async function GET(req:Request){
    await connectToDB()

    try {
         

        // await Plan.deleteMany()
        const allTransactions = await Transaction.find();
        if(!allTransactions) throw new Error('Error getting plans');
       
        
        return Response.json(allTransactions, {status: 200})
    } catch (error: any) {
        return Response.json({error: error.message}, {status: 400})
    }
    
}

// export  {handler as POST, handler as GET}