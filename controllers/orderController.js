const express = require("express");
const Order = require("../models/orderModel");
const orders = express.Router();

// ROUTES
// read - all orders
orders.get("/", (req, res) => {
    Order.find({}) //add user from session
        .sort({ createdOn: 1 })
        .exec((error, foundOrders) => {
            if (error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(200).json(foundOrders[foundOrders.length - 1]);
            }
        });
});

// read - last order for a user
orders.get("/:user_id/lastorder", (req, res) => {
    Order.find({ user_id: req.params.user_id }) //add user from session
        .sort({ createdOn: 1 })
        .exec((error, foundOrders) => {
            if (error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(200).json(foundOrders[foundOrders.length - 1]);
            }
        });
});

// read - history
orders.get("/:user_id/history", (req, res) => {
    Order.find({ user_id: req.params.user_id })
        .sort({ createdAt: 1 })
        .exec((error, foundOrders) => {
            if (error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(200).json(foundOrders);
            }
        });
});

// create
orders.post("/:user_id/new", (req, res) => {
    req.body.user_id = req.params.user_id; //temporary to check different user's orders
    Order.create(req.body, (error, createdOrder) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(createdOrder);
        }
    });
});

// delete
orders.delete("/:id", (req, res) => {
    Order.findByIdAndDelete(req.params.id, (error, deletedOrder) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(deletedOrder);
        }
    });
});

module.exports = orders;