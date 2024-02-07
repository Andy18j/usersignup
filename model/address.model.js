const mongoose = require("mongoose")

const addressSchema = mongoose.Schema({
    name: String,
    mobile_No: Number,
    pincode: Number,
    locality: String,
    address: String,
    city: String,
    state: String,
    landmark: String,
    alternate_phone: String,
    addressType: String,
})


const addressModel = mongoose.model("address",addressSchema)


module.exports = {
    addressModel
}