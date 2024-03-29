import { NextRequest } from "next/server";
import { cookies } from "next/headers";


export function GET(request:NextRequest) {
    cookies().delete("session")
    return Response.json({status: "OK"})
}