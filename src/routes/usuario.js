const routerU = require("express").Router();
const {
    obtenerUsuarios,
    crearUsuario,
    eliminaUsuario,
    modificarUsuario
} = require('../controllers/usuarios');

routerU.get('/', obtenerUsuarios)
routerU.post('/', crearUsuario)
routerU.put('/:_id', modificarUsuario)
routerU.delete('/:_id', eliminaUsuario)

module.exports = routerU;

