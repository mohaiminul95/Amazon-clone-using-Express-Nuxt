const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const OrderSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    products: [
        {
            product: {type: Schema.Types.ObjectId, ref: "Product"},
            quantity: Number,
            price: Number
        }
    ],
    estimatedDelivery: String
});

OrderSchema.plugin(deepPopulate);

module.exports = mongoose.model("Order", OrderSchema);