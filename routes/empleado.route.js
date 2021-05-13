const express = require('express');
const app = express();
const empRoute = express.Router();


let Empleado = require('../models/Empleado');

//Add
empRoute.route('/createE').post((req, res, next) =>{
    console.log('aquí Empleado');
    Empleado.create(req.body, (error, data)=>{
        if(error){
            return (error)
        }else{
            res.json(data)
        }
    })
});

//Get all
empRoute.route('/empleados').get((req, res)=>{
    Empleado.find((error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
});

//Get single
empRoute.route('/readE/:id').get((req, res)=>{
    Empleado.findById(req.params.id, (error, data)=>{
        if(error){
            return(error)
        }else{
            res.json(data)
        }
    })
});

//Update
empRoute.route('/updateE/:id').put((req, res, next) =>{
    console.log('TODO LLEGA')
    console.log(req);
    let id = {_id : req.params.id}
    console.log(id);
    console.log({$set : req.body});
    Empleado.findByIdAndUpdate(id, req.body,
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
empRoute.route('/deleteE/:id').delete((req, res, next) =>{

    Empleado.findByIdAndRemove(req.params.id, (error, data)=>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = empRoute;