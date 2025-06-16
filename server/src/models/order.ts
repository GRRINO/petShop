import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    pets:[{
    pet:{type:mongoose.Schema.Types.ObjectId,ref:"Pet"},
    quantity:Number
}
    ]    ,
    totalPrice:Number,
    status:{type:String,enum:["pending","completed","canceled",],default:"pending"}
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)
