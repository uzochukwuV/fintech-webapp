import {Schema, Document, model, models, ObjectId} from 'mongoose'
import { AccountDocument } from './account';


export interface PlanDocumnet extends Document {
    _account: AccountDocument['_id'],
    balance: Number,
    date: Date,
    percentage: Number,
    expires: Date,
    isActive: Boolean,
}


const planSchema = new Schema<PlanDocumnet>({
    _account: {type: Schema.Types.ObjectId, ref: 'Account'},
    balance: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date(Date.now())
    },
    percentage: {
        type: Number,
        default: 30
    },
    expires: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true
    }
})


const Plan = models.Plan || model<PlanDocumnet>('Plan', planSchema) ;


export default Plan;
