import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import {UserRouter} from "./routes/users.js";
import dotenv from "dotenv"

const PORT = 3001
const app = express()


dotenv.config() // enable env file
const DB_NAME = process.env["DB_NAME "]
const PASSWORD = process.env["USER_PASSWORD"]

mongoose.connect(`mongodb+srv://rjemik4:${PASSWORD}@expenseapp.vsayajm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)


// APPLYING SOME MIDDLEWARS
app.use(express.json()) // whenever data is sent from frontend will be converted to json
app.use(cors())


// Routes
app.use("/auth", UserRouter) //containing all routes for /auth endpoint in UserRouter.


app.listen(PORT, ()=>{
    console.log(`server is currently running on port ${PORT}`)
})
