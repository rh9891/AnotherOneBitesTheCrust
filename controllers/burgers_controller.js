// This file is the router controller. This is where all the router connections will take place, how the database arrays will be managed, and how the endpoints will be identified.
const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Get router.
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

// Post router.
router.post("/api/burgers", function(request, response) {
    burger.insertOne(
        ["burger_name", "devoured"],
        [request.body.burger_name, request.body.devoured],
        function(result) {
            response.json({ id: result.insertId});
        }
    );
});

// Put router.
router.put("/api/burgers/:id", function(request, response) {
    const condition = "id = " + request.params.id;
    console.log("condition", condition);
    burger.updateOne({ devoured: request.body.devoured }, condition, function(result){
        if(result, changedRows === 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

router.deleteOne(condition, function(request, response) {
    const condition = "id = " + request.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if(result, changedRows === 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;