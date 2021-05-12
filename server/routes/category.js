const router = require('express').Router();
const Category = require('../models/category');

// post request - create a new category
router.post("/categories", async (req, res) => {
    try{
        let category = new Category();
        category.type = req.body.type;

        await category.save();
        res.json({
            status: true,
            message: "Category created successfully"
        })
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

// get request - get all category
router.get("/categories", async(req, res) => {
    try{
        let categories = await Category.find();
        res.json({
            status: true,
            categories: categories
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

module.exports = router;