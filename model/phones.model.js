const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema({
    img: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true }
});

const phoneModel = mongoose.model("Phone", phoneSchema);

module.exports = {
    phoneModel
};
