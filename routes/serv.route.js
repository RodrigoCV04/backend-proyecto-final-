const express = require('express');
const app = express();
const servRoute = express.Router();


let Servicio = require('../models/Servicio');

//Add
servRoute.route('/createS').post((req, res, next) =>{
    console.log('aqui Servicio');
    Servicio.create(req.body, (error, data) =>{
        if (error) {
            return (error)
        } else {
            res.json(data)
        }
    })
});

//Get all
servRoute.route('/servicios').get((req, res)=>{
    Servicio.find((error, data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//Get single
servRoute.route('/readS/:id').get((req, res) =>{
    Servicio.findById(req.params.id, (error, data) =>{
        if(error) {
            return (error)
        } else {
            res.json(data)
        }
    })
});

//Update
servRoute.route('/updateS/:id').put((req, res, next) =>{
    console.log("TODO LLEGA")
    console.log(req);
    let id = {_id : req.params.id}
    console.log(id);
    console.log({$set : req.body});
    Servicio.findByIdAndUpdate(id, req.body,
        (error, data)=>{
            if(error){
                return next(error);
            }else{
                console.log('LLEGA')
                console.log(data);
                res.json(data)
                console.log('Data update successfully');
                console.log(data)
            }
        })
});

//Delete
servRoute.route('/deleteS/:id').delete((req, res, next) =>{

    Servicio.findByIdAndRemove(req.params.id, (error, data)=>{
        if (error){
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = servRoute;