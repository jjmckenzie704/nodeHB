var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.set("port", (process.env.PORT || 3000));

var people = [
    {
            firstName: "Jimmy",
            lastName: "McKenzie"
    },
    {
        firstName: "Teresa",
        lastName: "McKenzie"
    },
    {
        firstName: "Vivienne",
        lastName: "McKenzie"
    },
    {
        firstName: "Claire",
        lastName: "McKenzie"
    },
    {
        firstName: "Hank",
        lastName: "(Dog)"
    }
];

app.get('/', function(req, res){
    res.render('home', { 
        content: "This is my family:",
        published: true, 
        people: people
    });
});

app.listen(app.get("port"), function(){
    console.log("server started on port "+app.get("port"))
});