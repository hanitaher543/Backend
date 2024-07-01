const express = require ('express');

const User = require('../models/user');

const router = express.Router();

//Create request : GET, POST, PUT and DELETE

//Request POST : add new user
router.post('/', (req, res) => {

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

router.post('/create', async (req, res) =>{
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
router.get( '/getAll', (req, res)=>{
    
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
router.get('/getAllUsers',async (req, res)=>{
  
    try{
        users = await User.find()

        res.send(users)

    } catch(error){
        res.send(error)

    }
})

//get user by id
router.get('/getbyid/:id', (req, res)=>{

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
router.get(('/getbyiduser/:id'), async (req, res)=>{

    try{
        myid = req.params.id;
        user = await User.findOne({ _id : myid})

        res.send(user)


    }catch(error){
        res.send(error)
    }
})


router.put('/update', ()=>{
    console.log('Update Work');
});

router.delete( '/delete', ()=>{
    console.log('Delete Work');

});








module.exports = router;