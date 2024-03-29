import mongoose from 'mongoose';

declare global {
    var mongoose: any;
}
const MONGODB_URI = process.env.MONGODB_URI!;
if(!MONGODB_URI){
    throw new Error(
        "Please make sure you specify your MONGODB_URI environment varaible in .env.local"
    );
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {connection:null, promise: null};
}

async function connectToDB() {
    if(cached.connection){
        return cached.connection;
    }

    if (!cached.promise){
        
        const options = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose)=> {
            return mongoose
        });
    }

    try {
        cached.connection = await cached.promise;
    }catch (e){
        cached.promise = null;
        throw e
    }

    return cached.connection;
}

export default connectToDB;