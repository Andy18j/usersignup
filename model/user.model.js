const mongoose = require("mongoose")


const userSchhema = mongoose.Schema({
    email : {type:String,required:true},
    password : {type:String,required:true},
    confirm_password : {type:String,required:true}
})


const userModel = mongoose.model("user",userSchhema)

module.exports ={
    userModel
}