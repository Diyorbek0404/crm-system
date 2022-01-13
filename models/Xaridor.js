const mongoose = require("mongoose");
const XaridorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price:{
        type: String,
        required: true,
    }
}, 
{timestamps: true})

module.exports = mongoose.model("Xaridor", XaridorSchema);