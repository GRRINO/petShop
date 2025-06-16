import { NextFunction, Request, Response } from "express";
import { Error } from "mongoose";

const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    const statuscode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statuscode).json({
        message:err.message,
        stack:process.env.NODE_ENV === "production" ? null : err.stack
    })
}

export default errorHandler

