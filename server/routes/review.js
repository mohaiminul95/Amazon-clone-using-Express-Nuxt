const router = require('express').Router();
const Review = require('../models/review');
const Product = require('../models/product');
const verifyToken = require('../middlewares/verify-token');
const upload = require('../middlewares/upload-photo');

router.post("/reviews/:productID", [verifyToken, upload.single("photo")], async (req, res) => {
    try{
        const review = new Review();
        review.headline = req.body.headline;
        review.body = req.body.body;
        review.rating = req.body.rating;
        review.photo = req.file.location;
        review.user = req.decoded._id;
        review.product = req.params.productID;

        await Product.update({ $push: { reviews: review._id }});

        const savedReview = await review.save();
        if(savedReview){
            res.json({
                success: true,
                message: "Review added successfully"
            })
        }
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
});

router.get('/reviews/:productID', async (req, res) => {
   try {
        const productReviews = await Review.find({
            product: req.params.productID
        }).populate("user").exec();

        res.json({
            success: true,
            reviews: productReviews
        });
   } catch (e) {
       res.status(500).json({
           success: false,
           message: e.message
       })
   }
});

module.exports = router;