//objeto de controlador
const patientsCtrl = {};
//exportar - consultas abase de datos la 
const Patients = require('../models/patients')
//funciones
patientsCtrl.getPatients = async(req, res) => {
  const patients = await Patients.find();
  res.json(patients);
}
//obtener
patientsCtrl.getPatientsID = async (req, res) => {

  const patients = await Patients.findById(req.params.id);
  res.json(patients);


};
//crear
patientsCtrl.createPatients = async (req, res) => {
    const patients = new Patients({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cedula: req.body.cedula,
      email: req.body.email,
      edad: req.body.edad,
      sexo: req.body.sexo,
      seguro: req.body.seguro,
      servicio: req.body.servicio
    });
    await patients.save();
    res.json('Person saved')
};
//actualizar
patientsCtrl.updatePatients = async (req, res) => {
    const {id} = req.params;
    const patients = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cedula: req.body.cedula,
      email: req.body.email,
      edad: req.body.edad,
      sexo: req.body.sexo,
      seguro: req.body.seguro,
      servicio: req.body.servicio
    };

    await Patients.findByIdAndUpdate(id, {$set: patients}, {new: true});
    res.json({status: 'Patients update'})
};
//eliminiar
patientsCtrl.deletepatients = async (req, res) => {
    await Patients.findByIdAndDelete(req.params.id);
    res.json({status: 'Patients Delete'});
};

module.exports = patientsCtrl;
