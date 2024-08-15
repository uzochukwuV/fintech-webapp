import connectToDB from "@/lib/mongoose";
import User from "@/models/user";



export async function GET(req: Request){
    await connectToDB()

    const users = await User.find();

    return Response.json(users, {status: 200});
}