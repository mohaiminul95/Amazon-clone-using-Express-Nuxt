const mongoose = require('mongoose');
const mongooseAlgolia = require('mongoose-algolia');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    owner: {type: Schema.Types.ObjectId, ref: "Owner"},
    title: String,
    description: String,
    photo: String,
    price: Number,
    stockQuantity: Number,
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }]
});

// algolia search
ProductSchema.plugin(mongooseAlgolia, {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_SECRET,
    indexName: process.env.ALGOLIA_INDEX,

    selector: "title _id description photo price reviews owner", populate: {path: "owner", select: "name"}, debug: true
})

let Model= mongoose.model("Product", ProductSchema);
Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
    searchableAttributes: ['title']
})

module.exports = Model;