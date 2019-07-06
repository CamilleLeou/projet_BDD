const { Pool } = require("pg");

const pool = new Pool({
  user: "admin",
  password: "efrei2019",
  host: "localhost",
  port: "5432",
  database: "admin"
});

modules.exports.getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


/*
module.exports.queryDatabasePromise = function(query) {
  return new Promise((resolve, reject) => {

    let resultsToResolve;
    pool
      .connect()
      .then(() => console.log("Connected succesfuly !"))
      .then(() => {
        return pool.query(query);
      })
      .then(results => {
        resultsToResolve = results;
      })
      .catch(error => reject(error))
      .then(() => pool.end())
      .catch(error => reject(error))
      .then(() => {
        resolve(resultsToResolve);
      });
  });
};
*/