var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var hbs = require("hbs");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(__dirname+"/views/partials");
*/

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/delete", function(req, res) {
  res.send("Successfully deleted");
});

app.listen(4080, function() {
  console.log("Server started on port 4080");
});
