import express, { json } from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDb } from "./db";
import userRouter from "./routes/userRoute";
import petRouter from "./routes/petRoute"
import orderRouter from "./routes/orderRoute"
import cors from "cors"

dotenv.config({
    path:".env"
})

const app = express()

app.use(cors({
    origin : process.env.CLIENT_URL,
    credentials: true
}))

app.use(json())
app.use(cookieParser())

app.use(userRouter)
app.use(petRouter)
app.use(orderRouter)



const port = process.env.PORT

app.listen(port,()=>{
    connectDb()
    console.log("Server is running on : ",port)
})



