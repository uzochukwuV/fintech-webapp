import {Schema, Document, model, models, ObjectId} from 'mongoose'
import { AccountDocument } from './account';
import { UserDocument } from './user';


export interface PlanDocumnet extends Document {
    minDeposit: Number,
    percentage: Number,
    duration: Number,
    maxDeposit: Number,
    type: "SILVER" | "GOLD" | "BASIC" | "DIAMOND",
    description: String,
    users: [UserDocument['_id']],
}


const planSchema = new Schema<PlanDocumnet>({
    
    percentage: {
        type: Number,
        default: 30
    },
    duration: {
        type: Number,
    },
    type: {
        type: String,
        default: 'BASIC'
    },
    minDeposit: {
        type: Number,
    },
    maxDeposit: {
        type: Number,
    }, 
    description: {
        type: String,
    },
    users: [{
        
        type: [{type:Schema.Types.ObjectId, ref:'User' }],
        default: []
        
    }],
})


const Plan = models.Plan || model<PlanDocumnet>('Plan', planSchema) ;


export default Plan;
