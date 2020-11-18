const express = require("express");
const Restaurant = require("../models/restaurantModel");
const MenuItem = require("../models/menuItemModel");
const restaurants = express.Router();

// DATA
const newRestaurants = require("../dataFiles/restaurantData");

// ROUTES
// read
restaurants.get("/", (req, res) => {
    Restaurant.find({})
        .populate("menu") //?
        .exec(function(error, foundRestaurants) {
            if (error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(200).json(foundRestaurants);
            }
        });
});

// show
restaurants.get("/:id", (req, res) => {
    Restaurant.find({ restaurant_id: req.params.id }, (error, foundItems) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(foundItems);
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

// seed
restaurants.get("/seed/seed", (req, res) => {
    console.log(newRestaurants);
    Restaurant.create(newRestaurants, (err, restaurants) => {
        if (err) {
            console.log(err);
        }
        console.log("SEED: NEW RESTAURANTS CREATED!");
        res.redirect("/restaurants");
    });
});

// seed-newschema-restaurants
restaurants.get("/seed2/seed2", (req, res) => {
    // console.log(newRestaurants);
    Restaurant.create(newRestaurants, (err, createdRestaurants) => {
        if (err) {
            console.log(err);
        } else {
            console.log("SEED: NEW RESTAURANTS CREATED!");

            createdRestaurants.map((r) => {
                console.log(r);
                MenuItem.find({ restaurant_id: r.restaurant_id }, (err, foundItem) => {
                    console.log(foundItem); //array
                    foundItem.map((item) => {
                        Restaurant.findByIdAndUpdate(
                            r._id, {
                                $push: { menu: item._id },
                            },
                            (err, success) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(success);
                                }
                            }
                        );
                    });
                });
            });
        }
        res.redirect("/restaurants");
    });
});

module.exports = restaurants;