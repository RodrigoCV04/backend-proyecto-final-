const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Empleado = new Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    email : {
        type: String
    },
    dep : {
        type: String
    },
    rfc : {
        type: String
    }

},{
    collection: 'empleados'
});
module.exports = mongoose.model('Empleados', Empleado);