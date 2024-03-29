import {Schema, Document, model, models, ObjectId} from 'mongoose'
import { AccountDocument } from './account';


export interface TransactionDocumnet extends Document {
    _account: AccountDocument['_id'],
    type: 'DEPOSIT'|'WITHDRAW'|'SUBSCRIBE'|'OTHER',
    money: Number,
    date: Date,
    message: String,
    status: 'PENDING'|'COMPLETED'|'ERROR',
    isActive: Boolean,
    next: Number,
}


const TransactionSchema = new Schema<TransactionDocumnet>({
    _account: {type: Schema.Types.ObjectId, ref: 'Account'},
    type: {
        type: String,
        default: 'OTHER'
    },
    date: {
        type: Date,
        default: new Date(Date.now())
    },
    money: {
        type: Number,
        default: 0
    },
    next: {
        type:Number,
        default: 0
    },
    message: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: 'PENDING'
    },
    isActive: {
        type: Boolean,
        default: true
    }
})


const Transaction = models.Transaction || model<TransactionDocumnet>('Transaction', TransactionSchema) ;


export default Transaction;
