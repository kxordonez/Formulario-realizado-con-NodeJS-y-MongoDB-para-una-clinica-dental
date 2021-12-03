//mongoose 
const mongoose = require('mongoose');
//direccion local de la base de datos 
const URI = 'mongodb://localhost/grupo4-crud';
//conexion
mongoose.connect(URI)
        .then(db => console.log('DB is conected'))
        .catch(err => console.error(err));
module.exports = mongoose;