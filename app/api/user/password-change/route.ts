import { bencrypt } from "@/lib/auth";
import connectToDB from "@/lib/mongoose";
import User from "@/models/user";


export async function POST(req:Request){
    await connectToDB()
    const body = await req.json()
    console.log("body", body);

    const new_passowrd = await bencrypt(body.password)
    
    const user = await User.findByIdAndUpdate(body.id, {$set: {password: new_passowrd}})
    if (!user) {
        return Response.json({error: "No user found"}, {
            status:200
        })
    }
    console.log(user);
    
    return Response.json(user, {
        status:200
    })
}

// export  {handler as POST, handler as GET}