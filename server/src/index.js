import express from "express"
import cors from "cors"
import mongoose from "mongoose";

const PORT = 3001
const app = express()

// APPLYING SOME MIDDLEWARS
app.use(express.json()) // whenever data is sent from frontend will be converted to json
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`server is currently running on port ${PORT}`)
})