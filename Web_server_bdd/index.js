var express = require("express");
const query = require("./query");
const cors = require("cors");

var app = express();
app.use(cors());

app.get("/api/query", async (req, res, next) => {
    console.log(req.query);
    //const data= await query.queryDatabasePromise("select * from dba_prj01.Prospect");
    const data= [
        {a:"b"}
    ];
    res.send({data});
   });

app.use(express.static("build"));

app.listen(3000, (res) => {
 console.log("Server running on port 3000");
});