const express = require("express")

const {addressModel} = require("../model/address.model")

const addressRouter = express.Router()


addressRouter.post("/postaddress",async(req,res)=>{
    try{
        const {name,mobile_No,pincode,locality,address,city,state,landmark,alternate_phone,addressType}=req.body
        const newaddress = await addressModel({name,mobile_No,pincode,locality,address,city,state,landmark,alternate_phone,addressType})
        await newaddress.save()
        res.status(200).json({msg:"adddress posted sucessfully"})


    }
    catch(err){
        res.status(502).json({msg:"Something went wrong"})
    }
})

addressRouter.get("/getadddress",async(req,res)=>{
    try{
        const address = await addressModel.find()
        res.status(200).json({msg:"user address are here",address})

    }
    catch(err){
        console.log(err)
        res.status(401).json({msg:"Something went wrong to get the address"})
    }
})



module.exports = {
    addressRouter
}