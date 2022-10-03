const express = require('express'); //utiliser le paquet express
const path = require('path');
const db = require('./BDD/connexion')
const app = express(); //Crée l'appli express

//Ressources static
app.use(express.static(path.join(__dirname, 'assets/img')));
app.use(express.static(path.join(__dirname, 'assets/css')));
app.use(express.static(path.join(__dirname, 'assets/js')));

//Effectue une Requête de la date
app.use((req, res, next) => {
    console.log('Requête effectué : ' + Date().toString());
    next();
});

//Définition du moteur d'affichage
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

//Page Accueil 
app.get('/', (req, res) => {

    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, resultat) => {
        if (err) throw err;
        console.log(resultat);
        //return res.send('Selected posts !');
        return res.status(200).render('index', { resultat });
    });
});

//Page posts
app.get('/post', (req, res) => {
    res.status(200).render('post'); 
});

//Page connexion BDD avec MySQL
app.get('/createdb', (req, res) => {
    db.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        res.send('BDD CONNECTED !');
      });
});

//Gère les pages qui ne sont pas valide et affiche une erreur 404
app.use((req, res) => {
    res.status(404).render('erreur')
    console.log('Connexion works !!');// réponse dans la console
})

module.exports = app;
