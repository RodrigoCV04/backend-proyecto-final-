const express = require('express');
const app = express();
const userRoute = express.Router();


let Usuario = require('../models/Usuario');

// Add 
userRoute.route('/create').post((req, res, next) => {
  console.log('aqui');
  Usuario.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All 
userRoute.route('/').get((req, res) => {
  Usuario.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get single 
userRoute.route('/read/:id').get((req, res) => {
  Usuario.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update 
userRoute.route('/update/:id').put((req, res, next) => {
    console.log("TODO LO QUE LLEGA")
    //console.log(req);
    let id = {_id : req.params.id}
    console.log(id); 
console.log({$set : req.body});
      Usuario.findOneAndUpdate(id , req.body
  , (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("LLEGA")
        console.log(data);
      res.json(data)
      console.log('Data updated successfully'); 
      console.log(data)
    }
  })
})

// Delete 
userRoute.route('/delete/:id').delete((req, res, next) => {
   
  Usuario.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute;