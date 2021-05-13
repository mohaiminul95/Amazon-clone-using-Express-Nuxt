const express= require("express");
const morgan= require("morgan");
const bodyParser= require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Models
const User = require('./models/user');

const app = express();

dotenv.config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, (err) => {
    if(err)
        console.log(err);
    else
        console.log('Connected to the Database');
});

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// api routes
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const ownerRoutes = require('./routes/owner');

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);

// server port
app.listen(8000, (err) => {
    if(err)
        console.log(err);
    else
        console.log("Listening on port", 8000);
 });
