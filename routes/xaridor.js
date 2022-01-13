const router = require("express").Router();
const Xaridor = require("../models/Xaridor");

//create xaridor
router.post("/", async(req, res) => {
    const newXaridor = new Xaridor(req.body)
    try {
        const savedXaridor = await newXaridor.save();
        res.status(200).json(savedXaridor)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all xaridor
router.get("/", async(req, res) => {
    try {
        let xaridor;
        xaridor =  await Xaridor.find()
        res.status(200).json(xaridor)
    } catch (error) {
        res.status(200).json(error)
    }
})

router.put("/:id", async(req, res) => {
    try {
        const updatePost = await Xaridor.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {
                new:true
            }
        )
        res.status(200).json(updatePost)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router