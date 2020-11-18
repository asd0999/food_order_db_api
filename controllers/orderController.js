const express = require("express");
const Order = require("../models/orderModel");
const orders = express.Router();

// ROUTES
// read - last order
orders.get("/", (req, res) => {
    Order.find({}) //add user from session
        .sort({ createdOn: 1 })
        .exec((error, foundOrders) => {
            if (error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(200).json(foundOrders[0]);
            }
        });
});

// read - history
orders.get("/history", (req, res) => {
    Order.find({})
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
orders.post("/new/:user_id", (req, res) => {
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

const newOrders= require('../dataFiles/orderData.js')
orders.get('/seed', (req, res) => {
    console.log(newOrders)
    Order.create(newOrders, (err, orders) =>{
        if (err) {console.log(err) }    
        console.log('SEED: NEW ORDERS CREATED!')
        res.redirect('/orders')
    })
})

// show
orders.get("/:id", (req, res) => {
    Order.find({ order_id: req.params.id }, (error, foundItems) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(foundItems);
        }
    });
});

module.exports = orders;