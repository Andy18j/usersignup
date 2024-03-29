const express = require("express")
const cors = require("cors")
const {connection} = require("./config/db")
const { userRouter } = require("./route/user.route")
const { phoneRouter } = require("./route/phones.routes")
const { addressRouter } = require("./route/address.route")
require("dotenv").config()


const app = express()
app.use(express.json())
app.use(cors())
app.use("",userRouter)
app.use("",phoneRouter)
app.use("",addressRouter)

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})


app.listen(process.env.port,async()=>{
    try{
         await connection
         console.log("connected")
    }
    catch(err){
        console.log("Not connected")
    }
    console.log(`port is running on the ${process.env.port}`)
})