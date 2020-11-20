const express = require("express")
const User = require("../models/userModel")
const users = express.Router();

//DATA
const newUsers = require("../dataFiles/userData")

//ROUTES

//index 
users.get("/", (req, res) => {
    User.find({}, (err, foundUsers) => {
        if (err) {
            console.log(err);
            res.status(400).json(err.message)
        } else {
            console.log(foundUsers)
            res.status(200).json(foundUsers)
        }
    })
})

//USER  SEED ROUTES
users.get("/seed/seed", (req, res) => {
    console.log(newUsers);
    User.create(newUsers, (err, createdUsers) => {

        if (err) {
            console.log(err);
        } else {
            console.log(createdUsers)
            res.redirect("/")
        }
    })
})


module.exports = users;