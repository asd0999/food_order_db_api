const express = require("express");
const MenuItem = require("../models/menuItemModel");
const newMenuItems = require("../dataFiles/menuItemData");
const menuitems = express.Router();

// ROUTES
// read
menuitems.get("/", (req, res) => {
    MenuItem.find({}, (error, foundMenuItems) => {
        if (error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(200).json(foundMenuItems);
        }
    });
});

// seed-newschema-menuitems
menuitems.get("/seed/seed/", (req, res) => {
    // console.log(newMenuItems);
    MenuItem.create(newMenuItems, (err, menuItems) => {
        if (err) {
            console.log(err);
        }
        console.log("SEED: NEW ITEMS CREATED!");
        res.redirect("/menuitems");
    });
});

module.exports = menuitems;