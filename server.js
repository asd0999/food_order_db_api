// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();

// CONFIGURATIONS
const PORT = 3030;
const mongodbURI = "mongodb://localhost:27017/food_orders";
mongoose.connection;

// DATABASE
mongoose.connect(
    mongodbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    () => {
        console.log("the connection with mongod is established at", mongodbURI);
    }
);

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status"));

// CONTROLLERS
const restaurantController = require("./controllers/restaurantController");
app.use("/restaurants", restaurantController);

const orderController = require("./controllers/orderController");
app.use("/orders", orderController);

// ROUTE
app.get("/", (req, res) => {
    res.send("index route working");
});

// LISTENER
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});