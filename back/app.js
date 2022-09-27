const express = require('express'); //utiliser le paquet express

const app = express(); //Crée l'appli express

app.get('/', (req, res) => {
    res.setHeader('Content-Type','text/html');
    res.sendFile('/Project Personnel Informatique/Muzan/front/index.html');
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
// app.use((req, res, next) => { //next permet de renvoyer à la prochaine fonction,l'execution du serveur
//     res.json({message: "hello motherfuck"});// réponse en JSON
//     next();
// });

// app.use((req, res) => {
//     console.log('mesage envoyer avec success !!');// réponse dans la console
// })