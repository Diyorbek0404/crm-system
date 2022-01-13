const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    secretno :{
        type: String,
        unique: true
    },
    title: {
        type: String,
        unique: true
    },
    price: {
        type: Number,
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Cart", CartSchema);
