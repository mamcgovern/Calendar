// ███████████████████████████████████████████████████████████████████████
// SECTION: Initialization
// ███████████████████████████████████████████████████████████████████████

var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";
const { MongoClient } = require("mongodb");

// MongoDB
const url = "mongodb://127.0.0.1:27017";
const dbName = "TSTourTracker";
const client = new MongoClient(url);
const db = client.db(dbName);

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

// ███████████████████████████████████████████████████████████████████████
// SECTION: Accounts
// ███████████████████████████████████████████████████████████████████████


// ███████████████████████████████████████████████████████████████████████
// SECTION: Discography
// ███████████████████████████████████████████████████████████████████████


// ███████████████████████████████████████████████████████████████████████
// SECTION: Main Set
// ███████████████████████████████████████████████████████████████████████


// ███████████████████████████████████████████████████████████████████████
// SECTION: Outfits
// ███████████████████████████████████████████████████████████████████████


// ███████████████████████████████████████████████████████████████████████
// SECTION: Surprise Songs
// ███████████████████████████████████████████████████████████████████████


// ███████████████████████████████████████████████████████████████████████
// SECTION: Events
// ███████████████████████████████████████████████████████████████████████

// Get all events
app.get("/events", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("events")
        .find(query)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});