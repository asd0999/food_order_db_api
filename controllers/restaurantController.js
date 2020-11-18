const express = require("express");
const Restaurant = require("../models/restaurantModel");
const MenuItem = require("../models/menuItemModel");
const restaurants = express.Router();

// ROUTES
// read
restaurants.get("/", (req, res) => {
    Restaurant.find({}, (error, foundRestaurants) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(foundRestaurants);
        }
    });
});



// create
restaurants.post("/new", (req, res) => {
    Restaurant.create(req.body, (error, createdRestaurant) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(createdRestaurant);
        }
    });
});

// delete
restaurants.delete("/:id", (req, res) => {
    Restaurant.findByIdAndDelete(req.params.id, (error, deletedRestaurant) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(deletedRestaurant);
        }
    });
});

const newRestaurants= require('../dataFiles/restaurantData.js')
restaurants.get('/seed', (req, res) => {
    console.log(newRestaurants)
    Restaurant.create(newRestaurants, (err, restaurants) =>{
        if (err) {console.log(err) }    
        console.log('SEED: NEW RESTAURANTS CREATED!')
        res.redirect('/restaurants')
    })
})

// show
restaurants.get("/:id", (req, res) => {
    MenuItem.find({ restaurant_id: req.params.id }, (error, foundItems) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(foundItems);
        }
    });
});
module.exports = restaurants;