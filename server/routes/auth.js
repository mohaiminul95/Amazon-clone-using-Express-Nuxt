const router = require('express').Router();
const User = require('../models/user');
const verifyToken = require('../middlewares/verify-token');
const jwt = require('jsonwebtoken');

/* Signup route */
router.post('/auth/signup', async (req, res) => {
    if(!req.body.email || !req.body.password){
        res.json({
            success: false,
            message: "Please enter correct email and password"
        })
    }
    else{
        try{
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            await newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800   // 1week
            });
            res.json({
                success: true,
                token: token,
                message: "Signup Successful"
            });
        } catch (e) {
            res.status(500).json({
                success: false,
                message: e.message
            })
        }
    }
});

/* user Profile */
router.get('/auth/user', verifyToken, async (req, res) => {
    try{
        let foundUser = await User.findOne({ _id: req.decoded._id }).populate("address").exec();
        if(foundUser) {
            res.json({
                success: true,
                user: foundUser
            })
        }
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

/* update profile */
router.put('/auth/user', verifyToken, async (req, res) => {
    try{
        let foundUser = {};
        if(req.body.name) foundUser.name = req.body.name;
        if(req.body.email) foundUser.email = req.body.email;
        if(req.body.password) foundUser.password = req.body.password;

        await User.findOneAndUpdate({ _id: req.decoded._id }, { $set: foundUser }, { upsert: false });
        // upsert: if dont find the data by id then create new data from sets
        res.json({
            success: true,
            message: "Profile updated"
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

/* Login */
router.post("/auth/login", async (req, res) => {
    try{
        let foundUser = await User.findOne({ email: req.body.email });
        if(!foundUser)
        {
            res.status(403).json({
                success: false,
                message: "Authentication failed, User not found!!!"
            })
        } else {
            if(foundUser.comparePassword(req.body.password)) {
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800   // 1week
                });
                res.json({
                    success: true,
                    token: token,
                    message: "Login Successful"
                });
            } else {
                res.json({
                    success: false,
                    message: "Authentication failed, Invalid password!!"
                })
            }
        }
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
})

module.exports = router;
