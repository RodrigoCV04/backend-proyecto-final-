const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Producto = new Schema({
       id : {
        type: String
    },
      nameProduct : {
          type: String
      }, 
      descProduct : {
          type: String
      },
      precioProduct : {
          type: String
      },
      cantProduct : {
          type: String
      } 
},{
    collection: 'productos'
});
module.exports = mongoose.model('Productos', Producto);