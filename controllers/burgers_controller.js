// This file is the router controller. This is where all the router connections will take place, how the database arrays will be managed, and how the endpoints will be identified.
const express = require("express");
const router = express.Router();

// Imported the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// GET request that is made to the router.
router.get("/", function(request, response) {
    burger.selectAll(function(data) {
        // This is the handlebars object.
        const hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        response.render("index", hdbrsObj);
    });
// POST request that is made to the router.
router.post("/api/burgers", function(request, response) {
    console.log("Hello World!", request.body)
    burger.insertOne(
        ["burger_name"],
        [request.body.burger_name],
        function(result) {
          //  response.json({ id: result.insertId});
          response.redirect("/")
        }
    );
});
// PUT request that is made to the router.
router.put("/api/burgers/:id", function(request, response) {
    const condition = "id = " + request.params.id;
    console.log("condition", condition);
    burger.updateOne({ devoured: request.body.devoured }, condition, function(result) {
        if(result.changedRows === 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});
// DELETE request that is made to the router.
router.delete("/api/burgers/:id", function(request, response) {
    const condition = "id = " + request.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if(result.changedRows === 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
    });
});

// Export routes for server.js to use.
module.exports = router;