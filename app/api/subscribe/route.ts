import connectToDB from "@/lib/mongoose";
import Plan from "@/models/plan";






export async function POST(req: Request){
    await connectToDB();

    const body = await req.json();
   
    

    try {
        const subscribeUser = await Plan.findByIdAndUpdate(body.planID, {$push: {users: body.userID}})
        if(!subscribeUser) throw new Error('No done')
            return Response.json(subscribeUser, {status: 200})
    } catch (error) {
        return Response.json(error, {status: 400})
    }
}