const express = require('express');
require('./config/connect');

const productRoute = require ('./routes/product')
const userRoute = require ('./routes/user')


//Hérite de toutes les fonctions disponibles dans Express.
const app  = express();

// aider my app de lire des choses format JSON
app.use(express.json());


//http://127.0.0.1:3000/product/name of my request exist in routes

app.use('/product', productRoute);

app.use('/user', userRoute);






//Run server !!
app.listen( 3000, () => {
    console.log('server work')
});