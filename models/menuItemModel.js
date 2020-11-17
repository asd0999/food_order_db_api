const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
    restaurant_id: { type: String },
    item_id: { type: String },
    item: { type: String },
    description: { type: String },
    imgURL: { type: String },
    price: { type: Number },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;