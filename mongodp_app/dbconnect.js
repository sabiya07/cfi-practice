import mongoose from "mongoose"

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://sabiya:mymongodbaccount@sabiya.28lg5jn.mongodb.net/test")
        console.log("mongo DB is connected")
    } catch (error) {
        console.log(error)
    }
}
connectDB()