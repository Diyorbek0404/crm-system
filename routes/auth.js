const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")

// create user (registration)
router.post("/registration", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(8)
        const ScriptPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            password: ScriptPass
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// sign in user (login)
router.post("/login", async (req, res) => {
    try {
        const savedUser = await User.findOne({ username: req.body.username })
        !savedUser && res.status(400).json("topilmadi")

        const validation = await bcrypt.compare(req.body.password, savedUser.password)
        !validation && res.status(400).json("topilmadi")

        const {password, ...others} = savedUser._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router