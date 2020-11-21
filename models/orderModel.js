const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user_id: { type: String },
    delivery: { type: Boolean, default: true },
    order: [{
        item_id: { Type: String },
        quantity: { type: Number },
    }, ],
}, {
    timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;