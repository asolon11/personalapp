var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs('resume', ['resume']); //says which mongodb database and collection we're gonna be using
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public")); //tells server where to look for files; doing this connects server.js file to html file

app.get('/resume', function(req, res){
  console.log("I received a GET request");

  db.resume.find(function(err, docs) {
    console.log(docs);
    res.json(docs);
  });

});

// app.get('/resume/:id', function (req, res) {
//   var id = req.params.id;
//   console.log(id);
//   db.resume.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
//     res.json(doc);
//   });
// });

app.listen(8080);

console.log("Server running on port 8080");
