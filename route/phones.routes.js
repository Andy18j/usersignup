const express = require("express")

const {phoneModel} = require("../model/phones.model")


const phoneRouter=express.Router()


phoneRouter.post("/phone",async(req,res)=>{
    try{ 
        const {img,brand,price,description}=req.body
        const existingPhone = await phoneModel.findOne({ img, brand, price, description });
        if (existingPhone) {
            return res.status(500).json({ msg: "This phone is already in the database" });
        }
        const phone = await phoneModel({img,brand,price,description})
      
        await phone.save()
        res.status(200).json({msg:"Phone Posted Sucessfully",phone})

    }
    catch(err){
        console.log(err)
        res.status(501).json({msg:"Something went wrong to posting mobile data"})
    }
})


phoneRouter.get("/phone",async(req,res)=>{
    try{
        const phone = await phoneModel.find()
         res.status(200).json({msg:"phones are here",phone})

    }
    catch(err){
        console.log(err)
        res.status(501).json({msg:"Somethiing went wrong to retrive phone data"})
    }
})


module.exports = {
    phoneRouter
}