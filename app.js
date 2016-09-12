const express = require('express');
const path = require('path');
const GooglePlaces = require('googleplaces');



const app = express();
const googlePlaces = new GooglePlaces("AIzaSyD3msJkEFJtzw8vRy-uV9S7KFR0e-FfhU0", "json");


app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.get("/placeSearch", (req, res) => {
    console.log(parseFloat(req.query.lat), parseFloat(req.query.long));
    const parameters = {
        location: [parseFloat(req.query.lat), parseFloat(req.query.long)],
        types: req.query.placeType,
        radius: req.query.radius
    };

    googlePlaces.placeSearch(parameters, (error, response) => {
        if (error) throw error;
        res.json(response);
    });
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});

module.exports = app
