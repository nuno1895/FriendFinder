 var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Basic route that sends the user first to the AJAX Page


// Starts the server to begin listening
// =============================================================

