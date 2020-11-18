const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const MenuItem = require("./menuItemModel");

const restaurantSchema = new Schema({
    restaurant_id: { type: String },
    restaurantName: { type: String },
    apartmentNumber: { type: Number },
    streetname: { type: String },
    zipcode: { type: Number },
    phoneNumber: { type: Number },
    imgUrl: { type: String },
    rating: { type: Number },
    tags: [String],
    menu: [{
        type: Schema.Types.ObjectId,
        ref: "MenuItem",
    }, ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;