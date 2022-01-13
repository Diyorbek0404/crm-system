const router = require("express").Router();
const Cart = require("../models/Cart");

// create cart
router.post("/", async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all
router.get("/", async (req, res) => {
    try {
        let carts;
        carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete all carts
router.delete("/", async (req, res) => {
    try {
        let cartde;
        cartde = await Cart.deleteMany();
        res.status(200).json("hammasi o'chdi")
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete by id
router.delete("/:id", async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        await cart.delete();
        res.status(200).json("Post has been deleted...");
    } catch (error) {
        res.status(500).json(error)
    }
})

// get by id  
router.get("/:id", async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router