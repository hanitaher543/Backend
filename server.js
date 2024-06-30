const express = require('express');


//Hérite de toutes les fonctions disponibles dans Express.
const app  = express();


//Create request : GET, POST, PUT and DELETE
app.post( '/add', () =>{
   console.log('Add work');
} );

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