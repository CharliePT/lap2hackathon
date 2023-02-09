const fs = require("fs");
require("dotenv").config();

const sql = fs.readFileSync(__dirname + '/setup.sql').toString();
console.log(process.env.DB_URL);
const db = require("./db");
db.query(sql)
    .then(data => {
        // db.end();
        console.log('Set-up complete.');
    })
    .catch(error => console.log(error));

module.exports = db;