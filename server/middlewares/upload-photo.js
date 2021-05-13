const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.DO_SECRET_ACCESS_KEY,
    accessKeyId: process.env.DO_ACCESS_KEY_ID
})

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint('https://sgp1.digitaloceanspaces.com');
const s3 = new aws.S3({
    endpoint: spacesEndpoint
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'technometrics/Dev_Purpose/rabid',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString());
        },
    })
});

module.exports = upload;