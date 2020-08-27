const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//bodyParser has several different modes like .text to interpret as text or .json to parse to json
//we use urlencoded mode when parsing data coming from an html form posted to your Server
//extended: true lets you post nested objects which you need to explicitly declare
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
})

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  res.send("the result is " + (num1 + num2));
})

app.post("/bmicalculator", function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi = (weight / (height*height));
  res.send("your bmi is " + bmi);
})
