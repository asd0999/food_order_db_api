const express = require("express")
const User = require("../models/userModel")
const Order = require("../models/orderModel");
const users = express.Router();

//DATA
const newUsers = require("../dataFiles/userData")



//ROUTES






//USER  SEED ROUTES
users.get("/seed", (req, res) => {
    console.log(newUsers)
})


module.exports = users