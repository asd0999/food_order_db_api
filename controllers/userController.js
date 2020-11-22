const express = require("express");
const User = require("../models/userModel");
const users = express.Router();

//DATA
const newUsers = require("../dataFiles/userData");

//ROUTES

//index - all users
users.get("/", (req, res) => {
    User.find({}, (err, foundUsers) => {
        if (err) {
            console.log(err);
            res.status(400).json(err.message);
        } else {
            console.log(foundUsers);
            res.status(200).json(foundUsers);
        }
    });
});

//index - one user
users.get("/:user_id", (req, res) => {
    User.findById(req.params.user_id, (err, foundUser) => {
        if (err) {
            console.log(err);
            res.status(400).json(err.message);
        } else {
            console.log(foundUser);
            res.status(200).json(foundUser);
        }
    });
});

//USER  SEED ROUTES
users.get("/seed/seed", (req, res) => {
    console.log(newUsers);
    User.create(newUsers, (err, createdUsers) => {
        if (err) {
            console.log(err);
        } else {
            console.log(createdUsers);
            res.redirect("/");
        }
    });
});

module.exports = users;