const { Client } = require("pg");

const client = new Client({
  user: "admin",
  password: "efrei2019",
  host: "localhost",
  port: "5432",
  database: "admin"
});


module.exports.queryDatabasePromise = function(query) {
  return new Promise((resolve, reject) => {
    client
      .connect()
      .then(() => console.log("Connected succesfuly !"))
      .then(() => {
        return client.query(query);
      })
      .then(results => {
        resolve(results);
      })
      .catch(error => reject(error))
      .finally(() => client.end());
  });
};


// Await queryDatabase
/*
module.exports.queryDatabaseAsyncAwait = async function(query) {
  try {
    await client.connect();
    console.log("Connected succesfuly !");
    const results = await client.query(query);
    return results;
  } catch (error) {
    throw error;
  } finally {
    client.end();
  }
};
*/
/*
module.exports.queryDatabaseCallback = (query, callback) => {
  client
    .connect(err => {
      if (err) throw err;
      console.log("Connected succefuly");
      return client.query(query, (err, results) => {
        if (err) throw err;
        callback(results);
        client.end((err) => {
          if (err) throw err;
        })
      });
    })
    
};
*/

//exports.queryDatabasePromise("select * from dba_prj01.Prospect").then((results) => console.log(results.rows))


// Mauvaise pratique, il faut toujours mettre un return, car il est implicite sur une seule ligne
