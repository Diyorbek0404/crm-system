const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    secretno :{
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type:String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Post", PostSchema);
