//se crea las rutas del servidor
const express = require('express');
const router = express.Router();
//requerir
const patients = require('../controllers/patients.controller');
//operaciones 
//obtener
router.get('/', patients.getPatients);
//guardar
router.post('/', patients.createPatients);
router.get('/:id', patients.getPatients);
//editar datos
router.put('/:id', patients.updatePatients);
//eliminar
router.delete('/:id', patients.deletepatients);

module.exports = router;
