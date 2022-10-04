const express = require('express'); //utiliser le paquet express
const path = require('path');
const db = require('./BDD/connexion')
const app = express(); //Crée l'appli express

//Ressources static
app.use(express.static(path.join(__dirname, 'assets/img')));
app.use(express.static(path.join(__dirname, 'assets/css')));
app.use(express.static(path.join(__dirname, 'assets/js')));

//Extraction des données du formulaires
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

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
        if (err)
        console.log(err)
        else
        console.log(resultat);
        //return res.send('Selected posts !');
        return res.status(200).render('index', { resultat });
    });
});

//Page posts
app.get('/post', (req, res) => {
    db.connect((err) => {
        if (err) throw err;
        console.log("Page post");
        res.status(200).render('post');
    })
});

//Envoie du formulaire en BDD 
app.post('/post', (req, res) => {
    // console.log(req.body.titre);
    // console.log(req.body.message);
    let post = [req.body.titre, req.body.message];
    let sql = "INSERT INTO posts(titre, message) VALUES(?, ?)";
    db.query(sql, post, (err, resultats) => {
        if (err)
        console.log(err);
        else
        console.log(resultats);
        res.redirect('/');
        return res.status(200).render('post', { resultats });
    });
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
