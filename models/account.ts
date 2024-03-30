import {Schema, Document, model, models} from 'mongoose'
import User, { UserDocument } from './user';
import { PlanDocumnet } from './plan';
import { TransactionDocumnet } from './transaction';


export interface AccountDocument extends Document {
    _user: UserDocument["_id"],
    balance: Number,
    tradeBalance: Number,
    bonus: Number,
    plan: [PlanDocumnet['_id']]| PlanDocumnet['_id'],
    referrals: String[],
    referralBonus: Number,
    lastGain: Number,
    transactions: [TransactionDocumnet['_id']],
    type: 'BASIC'|'PREMIUM'|'LEGEND',

}


const accountSchema = new Schema<AccountDocument>({
    _user: 
        { type: Schema.Types.ObjectId, ref: "User" , required: true},
        

    balance: {
        type: Number,
        default:0
    },
    tradeBalance: {
        type: Number,
        default:0
    },
    bonus:{
        type: Number,
        default: 30
    },
    plan:{
        type: [{type:Schema.Types.ObjectId, ref:'Plan' }],
        index:true,
        
    },
    referrals: {
        type: [String],
        default: []
    },
    referralBonus: {
        type: Number,
        default: 0
    },
    lastGain:{
        type: Number,
        default:0
    },
    transactions: {
        type: [{type:Schema.Types.ObjectId, ref:'Transaction' }],
        default: []
    },
    type:{
        type: String,
        default: 'BASIC'
        
    },

})


const Account = models.Account || model<AccountDocument>('Account', accountSchema) ;


export default Account;
