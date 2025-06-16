import mongoose, { Schema } from "mongoose";
import { ref } from "process";

const petSchema = new Schema({
    name:String,
    age:Number,
    breed:String,
    price:Number,
    category:String,
    quantity: { type: Number, default: 1 },
    description:String,
    image:String,
    available:{type:Boolean,default:true}
},{timestamps:true})

export const Pet = mongoose.model("Pet",petSchema)