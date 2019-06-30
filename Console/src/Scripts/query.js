const { Client } = require("pg");

const client = new Client({
  user: "admin",
  password: "efrei2019",
  host: "localhost",
  port: "5432",
  database: "admin"
});

module.exports.queryDatabase = function(query) {
  return new Promise((resolve, reject) => {
    client
      .connect()
      .then(() => console.log("Connected succesfuly !"))
      .then(() => {
        console.log(query);
        client.query(query);
      })
      .then(results => {
        console.table(results.row);
        resolve(results);
      })
      .catch(error => reject(error))
      .finally(() => client.end());
  });
};

exports
  .queryDatabase("select * from dba_prj01.Prospect")
  .then(results => console.table(results.row));

/*
client
    .connect()
    .then(() => console.log("Connected succesfuly !"))
    .then(() => client.query("select * from dba_prj01.Prospect"))
    .then(results => console.table(results.rows))
    .catch(error => console.log(error))
    .finally(() => client.end());
    */
