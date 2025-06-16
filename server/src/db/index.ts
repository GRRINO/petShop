import mongoose from "mongoose"

export const connectDb = async()=>{
    try {
        const dbResponse = await mongoose.connect(process.env.MONGODB_URI!)
        console.log("Db connection successful",dbResponse.connection.host,process.env.PORT)
    } catch (error) {
        console.log("Db connection error",error)
        process.exit
    }
}
