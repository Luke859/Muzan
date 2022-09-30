const mysql = require('mysql2');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lukejeff12!",
});

module.exports = db;