const express = require('express');
require('./config/connect');

const User = require('./models/user');


//Hérite de toutes les fonctions disponibles dans Express.
const app  = express();

// aider my app de lire des choses format JSON
app.use(express.json());


//Create request : GET, POST, PUT and DELETE
app.post('/', (req, res) => {

    data = req.body;

    user1 = new User(data);

    user1.save()

    .then(
        (savedUser) => {
            res.send(savedUser)

        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
    


})

app.get( '/getAll', ()=>{
    console.log('Get Work');

});


app.put('/update', ()=>{
    console.log('Update Work');
});

app.delete( '/delete', ()=>{
    console.log('Delete Work');

});


app.listen( 3000, () => {
    console.log('server work')
});