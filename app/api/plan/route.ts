
import connectToDB from "@/lib/mongoose";
import Plan from '@/models/plan';


const plans = [
    {
      type: "BASIC",
      description: "Enjoy Entry level of inves and earn",
      percentage: "3.57",
      duration: 5,
      minDeposit: 500,
      maxDeposit: 2000,
      users: []
    },
    {
      type: "Silver",
      description: "Best plan for users to invest and earn",
      percentage: "10.57",
      duration: 21,
      minDeposit: 1500,
      maxDeposit: 5000,
      users: []
    },
    {
      type: "Diamond",
      description: "Advanced level of invest and earn",
      percentage: "3.57",
      duration: 30,
      minDeposit: 5000,
      maxDeposit: 10000,
      users: []
    },
  ];


export async function GET(req:Request){
    await connectToDB()

    try {
         

        // await Plan.deleteMany()
        const allplans = await Plan.find();
        if(!allplans) throw new Error('Error getting plans');
       
        
        return Response.json(allplans, {status: 200})
    } catch (error: any) {
        return Response.json({error: error.message}, {status: 400})
    }
    
}

// export  {handler as POST, handler as GET}