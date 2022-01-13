const router = require("express").Router();
const Dashboard = require("../models/Dashboard");

router.post("/", async (req, res) => {
    const Dashboardadd = new Dashboard(req.body)
    try {
        const savedDashboard = await Dashboardadd.save();
        res.status(200).json(savedDashboard)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/", async (req, res) => {
    try {
        let dashboard;
        dashboard = await Dashboard.find()
        res.status(200).json(dashboard)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router