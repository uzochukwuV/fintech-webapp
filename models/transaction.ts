import {Schema, Document, model, models, ObjectId} from 'mongoose'
import { AccountDocument } from './account';
import { PlanDocumnet } from './plan';


export interface TransactionDocumnet extends Document {
    _account: AccountDocument['_id'],
    _plan?: PlanDocumnet['_id'],
    type: 'DEPOSIT'|'WITHDRAW'|'SUBSCRIBE'|'OTHER',
    plan?: "SILVER" | "GOLD" | "BASIC" | "DIAMOND",
    amount: Number,
    date: Date,
    message?: String,
    status?: 'PENDING'|'COMPLETED'|'ERROR',
    isActive?: Boolean,
}


const TransactionSchema = new Schema<TransactionDocumnet>({
    _account: {type: Schema.Types.ObjectId, ref: 'Account'},
    _plan : {type:Schema.Types.ObjectId, ref: 'Plan'},
    type: {
        type: String,
        default: 'OTHER'
    },
    plan: {
        type: String,
        default: "BASIC"
    },
    date: {
        type: Date,
        default: new Date(Date.now())
    },
    amount: {
        type: Number,
        default: 0
    },
    
    message: {
        type: String,
        default: ''
    },
    status: {
        type: String,
    },
    isActive: {
        type: Boolean,
    }
})


const Transaction = models.Transaction || model<TransactionDocumnet>('Transaction', TransactionSchema) ;


export default Transaction;
