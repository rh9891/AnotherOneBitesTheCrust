// This file is the router controller. This is where all the router connections will take place, how the database arrays will be managed, and how the endpoints will be identified.
const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Get route.
router.get("/", function(request, response) {
    burger.selectAll(function(data) {
        // This is the handlebars object.
        const hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        response.render("index", hdbrsObj);
    });
});

// Post route.
router.post("/api/burgers", function(request, response) {
    burger.insertOne(
        ["burger_name", "devoured"],
        [request.body.burger_name, request.body.devoured],
        function(result) {
            response.json({ id: result.insertId});
        }
    );
});





// Export routes for server.js to use.
module.exports = router;