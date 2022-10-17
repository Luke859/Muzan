const mysql = require('mysql2');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lukejeff12",
    database : 'muzan'
});

module.exports = db;