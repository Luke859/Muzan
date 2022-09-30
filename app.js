const express = require('express'); //utiliser le paquet express
const path = require('path');
const db = require('./BDD/connexion')

const app = express(); //Crée l'appli express

//Définition de l'en-tête
res.setHeader('Content-Type','text/html');

//Les middlewares//
//Page Accueil 
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
    app.use(express.static('views'))
    next();
});
//Page posts
app.get('/post', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/post.html'));
    app.use(express.static('views')) 
    next();
});
//Page connexion BDD avec MySQL
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
