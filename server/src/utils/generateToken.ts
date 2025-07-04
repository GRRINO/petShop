import { Response } from "express";
import { Types } from "mongoose";
import jwt from "jsonwebtoken"

const generateToken = (res:Response,userId:Types.ObjectId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET!,{expiresIn:'7d'})
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    })
}

export default generateToken