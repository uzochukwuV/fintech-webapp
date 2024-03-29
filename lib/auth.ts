"use server"
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import {jwtDecrypt, jwtVerify, SignJWT} from 'jose'
import connectToDB from "./mongoose";
import User from "@/models/user";
import bcrypt from 'bcrypt'
import Account from "@/models/account";



const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setExpirationTime("1 hour")
    .sign(key)
}

export async function decrypt(input:string): Promise<any> {
    const {payload} = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    })

    return payload;
}


async function bencrypt(params:any) {
    const encrypted = await bcrypt.hash(params, 10);
    return encrypted;
}

export async function login(formData:any) {
    await connectToDB();
    const form = formData;

    const user = await User.findOne({email: form!.email})
    if(!user){
        throw new Error("Invalid Email, Not found in our Database, Please Signup")
    }

    const isCorrectPassword = await bcrypt.compare(form.password, user.password)
    if(!isCorrectPassword){
        throw new Error("Invalid Password, Please retry, or Signup")
    }
    const expires = new Date(Date.now() + 60 * 60 * 1000)
    const session = await encrypt({user, expires})

    cookies().set("session", session, {expires, httpOnly: true})

    return user;


}

export async function register(formData:any) {
    await connectToDB();
    const form = formData;

    const user =await User.findOne({email: form!.email})

    const password =await bencrypt(form.password);



    if(user){
        throw new Error("Email already exist, found in our Database, Please Sign in")
    }

    form.password = password;

    const newUser = await User.create({...form})
    console.log(newUser);
    
    const newAccount = await Account.create({_user:newUser._id})
    console.log(newAccount);
    
    
    return {newUser, newAccount};


}

export async function logout() {
    cookies().delete('session');


}

export async function updateSession(request:NextRequest){
    const session = request.cookies.get("session")?.value;
    if(!session) return;

    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 60 * 60 * 1000)
    const res = NextResponse.next();

    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
        
    })
    return session
}