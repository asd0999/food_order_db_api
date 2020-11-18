const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuItemSchema = require('./menuItemModel')

const menuItemSchema = new Schema({
    restaurant_id: { type: Schema.Types.ObjectId, 
        ref: "Restaurant" },
    item_id: { type: String },
    item: { type: String },
    description: { type: String },
    imgURL: { type: String },
    price: { type: Number },
});

//const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = menuItemSchema;