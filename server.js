const express = require('express');
require('./config/connect');

const User = require('./models/user');
const Product = require('./models/product')


//Hérite de toutes les fonctions disponibles dans Express.
const app  = express();

// aider my app de lire des choses format JSON
app.use(express.json());


//Create request : GET, POST, PUT and DELETE

//Request POST : add new user
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

app.post('/create', async (req, res) =>{
    try{
        // Read data in my request from body
     data = req.body;
     //create new user
     usr = new User(data);

     savedUser = await usr.save();
     
     res.send(savedUser)


    }catch(error){
        res.send(error)

    }


})


//getAll using .then .catch
app.get( '/getAll', (req, res)=>{
    
User.find()

.then(
    (users) =>{
        res.send(users)
        
    }
)

.catch(
    (err) =>{
        res.send(err);
    }
)
} );

//getAll using try .. catch
app.get('/getAllUsers',async (req, res)=>{
  
    try{
        users = await User.find()

        res.send(users)

    } catch(error){
        res.send(error)

    }
})

//get user by id
app.get('/getbyid/:id', (req, res)=>{

    myid = req.params.id;

    User.findOne({ _id : myid })

    .then(
        (user) =>{
            res.send(user)
        }
    )
    .catch(
        (err) =>{
            res.send(err)
        }
    )
})

//get user by id with using try & catch 
app.get(('/getbyiduser/:id'), async (req, res)=>{

    try{
        myid = req.params.id;
        user = await User.findOne({ _id : myid})

        res.send(user)


    }catch(error){
        res.send(error)
    }
})


app.put('/update', ()=>{
    console.log('Update Work');
});

app.delete( '/delete', ()=>{
    console.log('Delete Work');

});



//CRUD : Product
//Product : create Post Request 
app.post('/createproduct', async (req, res) => {
    try{

        data = req.body;
        prod = new Product(data);

        savedProduct = await prod.save();

        res.status(200).send(savedProduct)

    } catch(error){
        res.status(400).send(error)
    }
})





//Run server !!
app.listen( 3000, () => {
    console.log('server work')
});