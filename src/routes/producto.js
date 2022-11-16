const routerP = require("express").Router();
const {
    obtenerProductos,
    crearProducto,
    eliminaProducto,
    modificarProducto
} = require('../controllers/productos');

routerP.get('/', obtenerProductos)
routerP.post('/', crearProducto)
routerP.put('/:_id', modificarProducto)
routerP.delete('/:_id', eliminaProducto)

module.exports = routerP;

