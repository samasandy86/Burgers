const express = require("express");
const bodyParser = require("body-parser");
let PORT = process.env.PORT || 8080;
let app = express();

// var orm = require("./config/orm.js");

app.use(express.static("public"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
 console.log("Server Listening on: https://localhost: " + PORT)
});
