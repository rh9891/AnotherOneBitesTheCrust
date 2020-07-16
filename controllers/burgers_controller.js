// This file is the router controller. This is where all the router connections will take place, how the database arrays will be managed, and how the endpoints will be identified.
const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");




// Export routes for server.js to use.
module.exports = router;