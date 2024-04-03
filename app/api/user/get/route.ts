import { getAccount, getUser } from '@/lib/helpers';

import connectToDB from "@/lib/mongoose";
import User from "@/models/user";


export async function POST(req:Request){
    await connectToDB()
    const body = await req.json()
    console.log(body);
    
    const {user} = await getUser(body.id)
    if (!user) {
        return Response.json({error: "No user found"}, {
            status:404
        })
    }
    const {account} = await getAccount(user?._id)
    if (!account) {
        return Response.json({error: "No account found"}, {
            status:404
        })
    }
    return Response.json({user, account}, {
        status:200
    })
}

// export  {handler as POST, handler as GET}