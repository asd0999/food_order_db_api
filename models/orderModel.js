const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user_id: { type: String },
    email: { type: String },
    phoneNumber: { type: Number },
    delivery: { type: Boolean },
    order: [{
        item_id: { type: String },
        quantity: { type: Number },
    }, ],
}, {
    timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;