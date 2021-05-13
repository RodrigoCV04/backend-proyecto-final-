const express = require('express');
const app = express();
const productRoute = express.Router();


let Producto = require('../models/Producto');

//Add
productRoute.route('/createP').post((req, res, next) =>{
    console.log('aqui Producto');
    Producto.create(req.body, (error, data) =>{
        if (error) {
            return (error)
          } else {
            res.json(data)
          }
    })
});

//Get All
productRoute.route('/productos').get((req, res) => {
    Producto.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
});

//Get single
productRoute.route('/readP/:id').get((req, res) => {
    Producto.findById(req.params.id, (error, data) =>{
        if (error) {
            return (error)
          } else {
            res.json(data)
          }
    })
});


//Update
productRoute.route('/updateP/:id').put((req, res, next) =>{
    console.log("TODO LO QUE LLEGA")
    console.log(req);
    let id = {_id : req.params.id}
    console.log(id); 
console.log({$set : req.body});
      Producto.findByIdAndUpdate(id , req.body
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
});

//Delete
productRoute.route('/deleteP/:id').delete((req, res, next) =>{

    Producto.findOneAndRemove(req.params.id, (error, data) =>{
        if (error) {
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = productRoute;