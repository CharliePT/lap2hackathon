const fs = require("fs");
require("dotenv").config();
const db = require("./db");
const sql = fs.readFileSync('./setup.sql').toString();
db.query(sql)
    .then(data => {
        // db.end();
        console.log('Set-up complete.');
    })
    .catch(error => console.log(error));