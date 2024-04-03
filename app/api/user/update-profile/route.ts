
import connectToDB from "@/lib/mongoose";
import User from "@/models/user";


export async function POST(req:Request){
    await connectToDB()
    const body = await req.json()
    console.log("body", body);
    
    const user = await User.findByIdAndUpdate(body.id, {$set : {country: body.country, state: body.state, firstName: body.firstName}})
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