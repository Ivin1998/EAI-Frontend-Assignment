// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

const POLYGON_API_KEY=process.env.POLYGON_API_KEY || '';

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.enable('trust proxy');

app.post('/api/fetchStockData', (req, res) => {
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION
    let date=req.body.date;
    let stockName = req.body.stockName;
    let url=`https://api.polygon.io/v2/aggs/ticker/${stockName}/range/1/day/${date}/${date}?apiKey=${POLYGON_API_KEY}`;
    axios.get(url)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500);
    })
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));