const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const {userModel} = require("../model/user.model")

const userRouter = express.Router()





userRouter.post("/post",async(req,res)=>{
  try{
    const {email,password,confirm_password}=req.body
    const existinguser = await userModel.findOne ({email})
  if (existinguser){
    return res.status(504).json({msg:"user already present try differnet email address"})
  }
  const hased = await bcrypt.hash(password,8)
  const newuser = new userModel({email,password:hased,confirm_password:hased})
  await newuser.save()
        res.status(201).json({msg:"user ragisterd sucesffully",newuser})


  }
  catch(err){
    console.log(err)
    res.status(504).json({msg:"something went wrong to login"})
  }
})

userRouter.post("/login",async(req,res)=>{
  try{
        const {email,password} =req.body
        const newuser = await userModel.findOne({email})
        if (!email){
          return res.status(501).json({msg:"This email address not valid please try another emmail address"})
        }
        const pass = await bcrypt.compare(password,newuser.password)
        if (!pass){
          return res.status(500).json({msg:"Incorrect password please try another password"})
        }
        const token = jwt.sign({userId:newuser._Id},process.env.key,{
          expiresIn:"5min"
        })
        res.status(201).json({msg:"Login sucessfully...",newuser,token:token})
  }
  catch(err){
    console.log(err)
    res.status(504).json({msg:"Something went wrong to login"})
  }
})


module.exports = {
    userRouter
}