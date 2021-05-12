const router = require('express').Router();
const Product = require('../models/product');

const upload = require('../middlewares/upload-photo');

// post request - create a new products
router.post("/products", upload.single('photo'), async (req, res) => {
    try{
        let product = new Product();
        // product.owner = req.body.ownerID;
        // product.category = req.body.categoryID;
        product.title = req.body.title;
        product.description = req.body.description;
        product.price = req.body.price;
        product.photo = req.file.location;
        product.stockQuantity = req.body.stockQuantity;

        await product.save();
        res.json({
            status: true,
            message: "Product successfully saved"
        })
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

module.exports = router;