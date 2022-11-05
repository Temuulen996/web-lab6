var express = require("express");
var app = express();
const fs = require("fs");
let data = fs.readFileSync("./wines.json");
// This should already be declared in your API file

// ADD THIS
var cors = require("cors");
app.use(cors());
data = JSON.parse(data);
app.get("/all", function (req, res) {
  res.send(data);
});
app.get("/search", function (req, res) {
  res.header("Access-Control-Allow-Origin");
  console.log(req.query);
  let newdata = [];
  let fromPrice = parseInt(req.query.fromPrice);
  let toPrice = parseInt(req.query.toPrice);
  let fromPoint = parseInt(req.query.fromPoint);
  let toPoint = parseInt(req.query.toPoint);

  if (req.query.byRegion != undefined) {
    for (let i = 0; i < data.length; i++) {
      if (
        (data[i].region_1 == req.query.byRegion ||
          data[i].region_2 == req.query.byRegion) &&
        data[i].price > fromPrice &&
        data[i].price <= toPrice &&
        data[i].points > fromPoint &&
        data[i].points <= toPoint
      ) {
        newdata.push(data[i]);
      }
    }
  } else if (req.query.byVariety != undefined) {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].variety == req.query.byVariety &&
        data[i].price > fromPrice &&
        data[i].price <= toPrice &&
        data[i].points > fromPoint &&
        data[i].points <= toPoint
      ) {
        newdata.push(data[i]);
      }
    }
  } else if (req.query.byName != undefined) {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].taster_name == req.query.byName &&
        data[i].price > fromPrice &&
        data[i].price <= toPrice &&
        data[i].points > fromPoint &&
        data[i].points <= toPoint
      ) {
        newdata.push(data[i]);
      }
    }
  } else if (req.query.byCountry != undefined) {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].country == req.query.byCountry &&
        data[i].price > fromPrice &&
        data[i].price <= toPrice &&
        data[i].points > fromPoint &&
        data[i].points <= toPoint
      ) {
        newdata.push(data[i]);
      }
    }
  }
  res.send(newdata);
});

// app.get("/all", function (req, res) {
//
// });

app.listen(3001);
