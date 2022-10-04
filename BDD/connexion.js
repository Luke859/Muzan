const mysql = require('mysql2');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : 'muzan'
});

module.exports = db;