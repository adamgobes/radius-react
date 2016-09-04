var express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/places", (req, res) => {
    res.json({
        "works": true
    })
});

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});

module.exports = app
