import connectToDB from "@/lib/mongoose";
import { updateSession } from "@/lib/auth";
import { NextRequest } from "next/server";


export async function GET(req:NextRequest){

    const session = await updateSession(req)
    return Response.json(session, {
        status:200
    })
}

// export  {handler as POST, handler as GET}