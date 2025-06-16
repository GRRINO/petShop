import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { Types } from "mongoose";
import { User } from '../models/user';
import asyncHandler from "../utils/asyncHandler";


export interface AuthRequest extends Request{
    user?:{
        name:string,
        email:string,
        _id:string | Types.ObjectId,
        role:string,
    }
}

interface User {
    name:string,
        email:string,
        _id:string | Types.ObjectId,
        role:string
}

const protect = asyncHandler(async(req:AuthRequest,res:Response,next:NextFunction)=>{

    let token;
    token = req.cookies.token 

    if(!token){
        res.status(401);
        throw new Error("Not Authorized")
    }

    if(token ){
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET!) as JwtPayload;
            if(!decoded){
                res.status(401);
                throw new Error("Not Authorized,Invalid token")
            }
            req.user = await User.findById(decoded.userId).select("-password") as User
            next()
        } catch (error) {
            res.status(401);
                throw new Error("Not Authorized,Invalid token")
        }
    }

})

export{protect}

