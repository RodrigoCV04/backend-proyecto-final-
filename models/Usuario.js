const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

let Usuario = new Schema({
    name: {
       type: String
    },
    email: {
       type: String
    },
    tipo: {
       type: String
    },
    numeroTelefonico: {
       type: Number
    }
 }, {
    collection: 'usuarios'
 })
module.exports = mongoose.model('Usuario', Usuario); 