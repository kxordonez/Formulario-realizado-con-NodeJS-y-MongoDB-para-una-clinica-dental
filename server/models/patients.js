//requerir mongoose
const mongoose = require('mongoose');
//se definen los esquemas
const {Schema } = mongoose;
//base de datos en mongoDB
const patientsSchema = new Schema({
  nombre: { type: String, required: true},
  apellido: {type: String, required: true },
  cedula: {type: String, required: true},
  email: {type: String, required: true },
  edad: {type: String, required: true },
  sexo: {type: String, required: true },
  seguro: {type: String, required: true },
  servicio: { type: String, required: true},
});
//pasar al modelo de datos
module.exports = mongoose.model('patients', patientsSchema);
