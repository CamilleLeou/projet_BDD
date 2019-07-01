const { Client } = require("pg");

const client = new Client({
  user: "admin",
  password: "efrei2019",
  host: "localhost",
  port: "5432",
  database: "admin"
});

/*
module.exports.queryDatabasePromise = function(query) {
  return new Promise((resolve, reject) => {
    client
      .connect()
      .then(() => console.log("Connected succesfuly !"))
      .then(() => {
        console.log(query);
        return client.query(query);
      })
      .then(results => {
        console.log(results);
        resolve(results);
      })
      .then(() => console.log("test"))
      .catch(error => reject(error))
      .finally(() => client.end());
  });
};
*/

// Await queryDatabase

module.exports.queryDatabaseAsyncAwait = async function(query) {
  try {
    await client.connect();
    console.log("Connected succesfuly !");
    console.log(query);
    const results = await client.query(query);
    console.log(results);
    console.log("test");
    return results;
  } catch (error) {
    throw error;
  } finally {
    client.end();
  }
};

/*
module.exports.queryDatabaseCallback = (query, callback) => {
  client
    .connect(err => {
      if (err) throw err;
      console.log("Connected succefuly");
      return client.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        callback(results);
        client.end((err) => {
          if (err) throw err;
        })
      });
    })
    
};
*/

exports.queryDatabaseAsyncAwait("select * from dba_prj01.Prospect", results => {
  console.log(results);
});

// Mauvaise pratique, il faut toujours mettre un return, car il est implicite sur une seule ligne

/*
client
    .connect()
    .then(() => console.log("Connected succesfuly !"))
    .then(() => client.query("select * from dba_prj01.Prospect"))
    .then(results => console.table(results.rows))
    .catch(error => console.log(error))
    .finally(() => client.end());
*/
