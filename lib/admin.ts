
"use server"
import User from "@/models/user";
import connectToDB from "./mongoose";
import Plan from "@/models/plan";



export default async function getAllUsers(){
    await connectToDB()

    try {
        const users =await User.find();
        return {success: users}
    } catch (error) {
        return {error: "could not fetch data"}
    }


}