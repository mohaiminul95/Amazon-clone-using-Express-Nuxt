const router = require('express').Router();
const User = require('../models/user');
const Address = require('../models/address');
const verifyToken = require('../middlewares/verify-token');
const axios = require('axios');

// save address
router.post("/addresses", verifyToken, async (req, res) => {
    try {
        let address = new Address();
        address.user = req.decoded._id;
        address.country = req.body.country;
        address.fullName = req.body.fullName;
        address.streetAddress = req.body.streetAddress;
        address.city = req.body.city;
        address.state = req.body.state;
        address.zipCode = req.body.zipCode;
        address.phoneNumber = req.body.phoneNumber;
        address.deliverInstruction = req.body.deliverInstruction;
        address.securityCode = req.body.securityCode;

        await address.save();
        res.json({
            success: true,
            message: "Successfully added an address"
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

// get all address
router.get("/addresses", verifyToken, async (req, res) => {
    try {
        let addresses = await Address.find({ user: req.decoded._id });
        res.json({
            success: true,
            addresses: addresses
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

// get single address
router.get("/addresses/:id", verifyToken, async (req, res) => {
    try {
        let address = await Address.findOne({ _id: req.params.id });
        res.json({
            success: true,
            address: address
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

// get countries from rest api
router.get("/countries", async (req, res) => {
    try{
        const response = await axios.get("https://restcountries.eu/rest/v2/all");
        res.json(response.data);
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

// update address
router.put("/addresses/:id", verifyToken, async (req, res) => {
    try {
        let foundAddress = {};
        if(req.body.country) foundAddress.country = req.body.country;
        if(req.body.fullName) foundAddress.fullName = req.body.fullName;
        if(req.body.streetAddress) foundAddress.streetAddress = req.body.streetAddress;
        if(req.body.city) foundAddress.city = req.body.city;
        if(req.body.state) foundAddress.state = req.body.state;
        if(req.body.zipCode) foundAddress.zipCode = req.body.zipCode;
        if(req.body.phoneNumber) foundAddress.phoneNumber = req.body.phoneNumber;
        if(req.body.deliverInstruction) foundAddress.deliverInstruction = req.body.deliverInstruction;
        if(req.body.securityCode) foundAddress.securityCode = req.body.securityCode;

        await Address.findOneAndUpdate({ _id: req.params.id }, { $set: foundAddress }, { upsert: false });
        // upsert: if dont find the data by id then create new data from sets
        res.json({
            success: true,
            message: "Address updated"
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

// delete address
router.delete("/addresses/:id", verifyToken, async (req, res) => {
    try {
        let deleteAddress = await Address.remove({ user: req.decoded._id, _id: req.params.id });
        if(deleteAddress) {
            res.json({
                success: true,
                message: "Address deleted"
            })
        }
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

// set as default address
router.put("/addresses/set/default", verifyToken, async (req, res) => {
    try {
        let doc = await User.findOneAndUpdate({ _id: req.decoded._id }, { $set: { address: req.body.id }});
        if(doc) {
            res.json({
                success: true,
                message: "Address sets as default"
            })
        }
    }catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})
module.exports = router;