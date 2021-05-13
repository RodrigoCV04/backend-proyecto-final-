const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Servicio = new Schema({
    num : {
        type: String
    },
    nameServ : {
        type:String
    },
    descServ : {
        type: String
    },
    unidServ : {
        type: String
    },
    precioServ: {
        type: String
    }

},{
    collection: 'servicios'
});
module.exports = mongoose.model('Servicios', Servicio);