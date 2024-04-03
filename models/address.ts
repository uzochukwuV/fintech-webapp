import {Schema, Document, model, models, ObjectId} from 'mongoose'
import { AccountDocument } from './account';


export interface AddressDocument extends Document {
    
    btc: String,
    eth: String,
    usdt: String,
   
}


const AddressSchema = new Schema<AddressDocument>({
    
    btc: {
        type: String,
        default: ''
    },
    eth: {
        type: String,
        default: ''
    },
    usdt: {
        type: String,
        default: ''
    },
    
})


const Address = models.Address || model<AddressDocument>('Address', AddressSchema) ;


export default Address;
