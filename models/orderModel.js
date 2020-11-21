const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user_id: { type: String },
    user_name: { type: String },
    delivery: { type: Boolean, default: true },
    itemsInOrder: [{
        item_id: { type: String },
        quantity: { type: Number, default: 1 },
        item_name: { type: String },
        price: { type: Number },
    }, ],
}, {
    timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;