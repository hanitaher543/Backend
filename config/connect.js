// Create database with using monogodb
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/dbhani')
   .then(
   () => {
    console.log('connected !!')
   }
   )
   .catch(
    (err) =>{
        console.log(err)
    }
   )



   module.exports = mongoose;