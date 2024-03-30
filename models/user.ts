import {Schema, Document, model, models, ObjectId} from 'mongoose'
import { AccountDocument } from './account';


export interface UserDocument extends Document {
    // _id?: String,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    phoneNumber: String,
    country: String,
    state: String,
    linkedIn: String,
    facebook: String,
    instagram: String,
    lastLoggedIn: String,
    birthDate: String,
    _account: AccountDocument['_id'],
    userType: 'USER'| "ADMIN",
}


const userSchema = new Schema<UserDocument>({
    firstName: {
        type: String,
        default:""
    },
    lastName: {
        type: String,
        default:""
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email:{
        type: String,
        required: [true, "Email is required"]
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    phoneNumber:{
        type: String,
        default:""
    },
    country: {
        type: String,
        default:""
    },
    state:{
        type: String,
        default:""
    },
    facebook: {
        type: String,
        default:""
    },
    instagram: {
        type: String,
        default:""
    },
    linkedIn: {
        type: String,
        default:""
    },
    lastLoggedIn: {
        type: String,
        default:""
    },
    birthDate: {
        type: String,
        default:""
    },
    _account: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },
    userType: {
        type: String,
        default: 'USER'
    }

})


const User = models.User || model<UserDocument>('User', userSchema) ;


export default User;
