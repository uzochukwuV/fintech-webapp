import User from "@/models/user";
import connectToDB from "./mongoose";
import Account from "@/models/account";




export async function getUser(params:string) {
    await connectToDB()

    try {
        const user = await User.findById(params);
        
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