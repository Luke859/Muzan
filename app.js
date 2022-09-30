const express = require('express'); //utiliser le paquet express
const path = require('path');
const mysql = require('mysql2');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lukejeff12!",
});

const app = express(); //Crée l'appli express

app.get('/', (req, res, next) => {
    res.setHeader('Content-Type','text/html');
    res.sendFile(path.join(__dirname, '/views/index.html'));
    app.use(express.static('views'))
    next();
});
app.get('/post', (req, res, next) => {
    res.setHeader('Content-Type','text/html');
    res.sendFile(path.join(__dirname, '/views/post.html'));
    app.use(express.static('views')) 
    next();
});
app.get('/createdb', (req, res, next) => {
    db.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        res.send('BDD CONNECTED !');
      });
    next();
});

app.use((req, res) => {
    console.log('Connexion works !!');// réponse dans la console
})

module.exports = app;


// // On appelle cela des middlesware
// app.use((req, res, next) => {
//     console.log('requete 1');// réponse dans la console
//     next();
// })

// app.use((req, res, next) => {
//     res.status(201);// réponse en code d'état 201
//     next();
// })

// app.use((req, res) => {
//     console.log('mesage envoyer avec success !!');// réponse dans la console
// })