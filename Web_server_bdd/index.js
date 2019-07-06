var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Client } = require("pg");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Functions for query the database

/*
GET — /users | getUsers()
GET — /prospects | getProspects()
GET — /prospectslist | getProspectsLists()
GET — /campaign | getCampaigns()

POST — /users | createUsers()
POST — /prospects | createProspects()
POST — /prospectslist | createProspectsLists()
POST — /campaign | createCampaigns()
*/

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "admin",
  password: "efrei2019",
  host: "localhost",
  port: "5432",
  database: "admin"
});

const getUsers = (request, response) => {
  pool.query("select * from dba_prj01.utilisateurs", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getProspectsLists = (request, response) => {
  pool.query("select * from dba_prj01.liste_prospect", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCampaigns = (request, response) => {
  pool.query("select * from dba_prj01.Campagne", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getProspects = (request, response) => {
  pool.query("select * from dba_prj01.Prospect", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
    const { name } = request.body
  
    pool.query('INSERT INTO dba_prj01.utilisateurs (NOM) VALUES ($1)', [name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }

// End Database functions

// Start of server functions

app.get('/users', getUsers);
app.get('/campaigns', getCampaigns);
app.get('/prospects', getProspects);
app.get('/prospectslists', getProspectsLists);

app.post('/users',createUser);

app.use(express.static("build"));

let portToListen = 3050;

app.listen(portToListen, res => {
  console.log(`Server running on port ${portToListen}`);
});
