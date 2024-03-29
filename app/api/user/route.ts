import connectToDB from "@/lib/mongoose";
import User from "@/models/user";


export async function POST(req:Request){
    await connectToDB()
    const body = await req.json()
    console.log(body);
    
    const user = await User.findById(body.id)
    if (!user) {
        return Response.json({error: "No user found"}, {
            status:200
        })
    }
    return Response.json(user, {
        status:200
    })
}

// export  {handler as POST, handler as GET}