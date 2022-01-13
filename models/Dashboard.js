const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
    productactive: {
        type: Number,
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Dashboard", DashboardSchema);