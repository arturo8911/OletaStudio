const routerA = require("express").Router();
const {
    obtenerAdministracion,
    crearAdministracion,
    eliminaAdministracion,
    modificarAdministracion
} = require('../controllers/administracion');

routerA.get('/', obtenerAdministracion)
routerA.post('/', crearAdministracion)
routerA.put('/:nombre', modificarAdministracion)
routerA.delete('/', eliminaAdministracion)

module.exports = routerA;

