const express = require('express');
require('./config/connect');



//Hérite de toutes les fonctions disponibles dans Express.
const app  = express();

// aider my app de lire des choses format JSON
app.use(express.json());







//Run server !!
app.listen( 3000, () => {
    console.log('server work')
});