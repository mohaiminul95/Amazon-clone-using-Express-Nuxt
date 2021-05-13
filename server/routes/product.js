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

// put request - update a single products
router.put("/products/:id", upload.single('photo'), async (req, res) => {
    try{
        let product = await Product.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                photo: req.file.location,
                category: req.body.categoryID,
                owner: req.body.OwnerID
            }
        }, { upsert: true }); // upsert: if dont find the data by id then create new data from sets
        res.json({
            status: true,
            message: "Product updated successfully",
            updateProduct: product
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
});

// delete request - delete a single products
router.delete("/products/:id", async (req, res) => {
    try{
        await Product.findOneAndDelete({ _id: req.params.id });
        res.json({
            status: true,
            message: "Product deleted successfully!"
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
});

module.exports = router;