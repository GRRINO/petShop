import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

interface IUser {
    username:string;
    email:string,
    password:string,
    role:string,
    matchPassword:(enterPassword:string)=>Promise<boolean>
}

const userSchema = new Schema<IUser>({
    username:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true,unique:true},
    role:{type:String,enum:["customer","admin"],default:"customer"},

},{
    timestamps:true
})

userSchema.pre("save",async function(next){

    const user = this as any;
    

    if(!user.isModified("password")){
        next()
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt)
})

userSchema.methods.matchPassword = async function(enterPassword:string){
    return await bcrypt.compare(enterPassword,this.password)
}

export const User = mongoose.model<IUser>("User",userSchema)