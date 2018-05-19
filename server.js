const express = require("express");
const bodyParser = require("body-parser");
const expressHanndlebars = require("express-handlebars")
let PORT = process.env.PORT || 8080;
let app = express();

let orm = require("./config/orm.js");


app.listen(PORT, () => {
 console.log("Server Listening on: https://localhost " + PORT)
});
