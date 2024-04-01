import User from "@/models/user";
import connectToDB from "./mongoose";
import Account from "@/models/account";
import Error from "next/error";



export async function getUser(params:string) {
    await connectToDB()

    try {
        const user = await User.findById(params);
        if(!user) return {user};
        
        return {user}
    } catch (error) {
        throw error
    } 
}


export async function getAccount(params:string) {
    await connectToDB()

    try {
        const account = await Account.findOne({_user:params});
        
        return {account}
    } catch (error) {
        throw error
    } 
}