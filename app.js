const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.get("/places", (req, res) => {
    res.json({
        "radius": req.query.radius,
        "placeType": req.query.placeType,
        "lat": req.query.lat,
        "long": req.query.long
    })
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});

module.exports = app
