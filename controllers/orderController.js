const express = require("express");
const Order = require("../models/orderModel");
const orders = express.Router();
const newOrders = require("../dataFiles/orderData.js");

// ROUTES
// read - all orders
orders.get("/", (req, res) => {
  Order.find({})
    .sort({ createdAt: 1 })
    .exec(function (error, foundOrders) {
      if (error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(200).json(foundOrders);
      }
    });
});

// read - last order for a user
orders.get("/:user_id/lastorder", (req, res) => {
  Order.find({ user_id: req.params.user_id }) //add user from session
    .sort({ createdAt: 1 })
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
    .sort({ createdAt: -1 })
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
  // req.body.user_id = req.params.user_id;
  console.log(req.body);
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

// edit order
orders.put("/:id/edit", (req, res) => {
  Order.find({ order_id: req.params.id }, (error, foundItems) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      console.log("order edited");
      res.status(200).json(foundItems);
    }
  });
});

// seed
orders.get("/seed/seed", (req, res) => {
  console.log(newOrders);
  Order.create(newOrders, (err, foundOrders) => {
    if (err) {
      console.log(err);
    } else {
      console.log("SEED: NEW ORDERS CREATED!");
      res.redirect("/orders");
    }
  });
});

module.exports = orders;
