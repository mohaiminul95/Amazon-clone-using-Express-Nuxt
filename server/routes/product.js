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

// get request - get all products's
router.get("/products", async (req, res) => {
    try{
        //  let products = await Product.find().populate("owner category").populate("reviews", "rating").exec();
         let products = await Product.find();
         res.json({
             status: true,
             products: products
         })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
 });

 // get request - get a single products
router.get("/products/:id", async (req, res) => {
    try{
        // let product = await Product.findOne({ _id: req.params.id }).populate("owner category").populate("reviews", "rating").exec();
        let product = await Product.findOne({ _id: req.params.id });
        res.json({
            status: true,
            product: product
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
});

module.exports = router;