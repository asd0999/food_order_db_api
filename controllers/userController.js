const express = require("express")
const User = require("../models/userModel")
const users = express.Router();

//DATA
const newUsers = require("../dataFiles/userData")



//ROUTES






//USER  SEED ROUTES
users.get("/seed/seed", (req, res) => {
    console.log(newUsers);
    User.create(newUsers, (err, createdUsers) => {

        if (err) {
            console.log(err);
        }
        console.log
    })
})


module.exports = users