import express from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {UserModel} from "../models/Users.js";


const router = express.Router()


router.post("register",async (req,res)=>{
    const {username, password} = req.body //Sending from a frontend two pieces of information by request body
    //Every request for a db will return promise so we will use async
    //We're gonna confirm that the user with specific username exist
    const user = await UserModel.findOne({username: username})
    res.json(user)
})

router.post("login")

export {router as UserRouter}