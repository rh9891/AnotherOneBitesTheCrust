const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
});