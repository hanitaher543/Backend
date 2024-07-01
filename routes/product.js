const express = require ('express');

const router = express.Router();

const Product = require('../models/product')




//CRUD : Product
//Product : create Post Request 
router.post('/createproduct', async (req, res) => {
    try{

        data = req.body;
        prod = new Product(data);

        savedProduct = await prod.save();

        res.status(200).send(savedProduct)

    } catch(error){
        res.status(400).send(error)
    }
})







module.exports = router;


