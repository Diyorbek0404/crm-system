const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require("./routes/post")
const dashboardRoute = require("./routes/dashboard")
const XaridorRoute = require("./routes/xaridor")
const cartRoute = require("./routes/cart")
dotenv.config()

app.use(express.json())

mongoose.connect("mongodb+srv://kuldashev:mO5JzQd3x8annG8z@cluster0.r6vwn.mongodb.net/mmm?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("Connected to mongodb"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/post/", postRoute)
app.use("/api/cart/", cartRoute)
app.use("/api/dashboard/", dashboardRoute)
app.use("/api/xaridor/", XaridorRoute)

app.listen("5000", () => {
    console.log("Backend is running on port 5000")
})