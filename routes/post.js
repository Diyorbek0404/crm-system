const router = require("express").Router();
const Post = require("../models/Post");

// create post
router.post("/create", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// update post by id
router.put("/:id", async (req, res) => {
    try {
        const updatepost = await Post.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new: true}
        )
        res.status(200).json(updatepost)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE POST 
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        await post.delete()
        res.status(200).json("bu post o'chirildi")
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all post
router.get("/", async (req, res) => {
    try {
        let posts;
        posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all by category


//  get all compyuter
router.get("/all/category", async (req, res) => {
    try {
        let posts;
        posts = await Post.find({ category: "kompyuter" }).select(category);
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
})


//get post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

//search post 
router.post("/findpost", async (req, res) => {
    let postPattern = new RegExp("^" + req.body.query)
    Post.find({ secretno: { $regex: postPattern } })
        .then(post => {
            res.json({ post })
        }).catch(err => {
            console.log(err)
        })
})


module.exports = router