const router = require('express').Router();
const Owner = require('../models/owner');

const upload = require('../middlewares/upload-photo');

//post request - to add new owner
router.post("/owners", upload.single('photo'), async (req, res) => {
    try{
        let owner = new Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;
        owner.photo = req.file.location;

        await owner.save();
        res.json({
            status: true,
            message: "Owner created successfully"
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
});

// get all owners
router.get("/owners", async (req, res) => {
   try{
       let owners = await Owner.find();
       res.json({
           status: true,
           owners: owners
       })

   } catch (e) {
       res.status(500).json({
           success: false,
           message: e.message
       })
   }
});

module.exports = router;