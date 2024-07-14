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
const url = "mongodb+srv://Cluster42981:L1ttlelady@hyperfixationscalendar.bfpjkxl.mongodb.net/?retryWrites=true&w=majority&appName=HyperfixationsCalendar";
const dbName = "HyperfixationsCalendar";
const client = new MongoClient(url);
const db = client.db(dbName);

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

// ███████████████████████████████████████████████████████████████████████
// SECTION: Accounts
// ███████████████████████████████████████████████████████████████████████

// Get all accounts
app.get("/accounts", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("Accounts")
        .find(query)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

// Get account by username
app.get("/accounts/:username", async (req, res) => {
    const username = req.params.username;
    
    try {
        await client.connect();
        console.log("Node connected successfully to GET MongoDB");
        
        const query = { username: username };
        const result = await db
            .collection("Accounts")
            .findOne(query);
        
        if (result) {
            console.log(result);
            res.status(200).send(result);
        } else {
            res.status(404).send({ message: "Account not found" });
        }
    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data", error);
        res.status(500).send({ message: "Internal server error" });
    } finally {
        await client.close();
    }
});


// ███████████████████████████████████████████████████████████████████████
// SECTION: Accounts
// ███████████████████████████████████████████████████████████████████████

// Get all accounts
app.get("/accounts", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("Accounts")
        .find(query)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

// ███████████████████████████████████████████████████████████████████████
// SECTION: Events
// ███████████████████████████████████████████████████████████████████████

// Get all Events
app.get("/events", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("Events")
        .find(query)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});