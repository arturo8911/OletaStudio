const routerV = require("express").Router();
const {
    obtenerVentas,
    crearVenta,
    eliminaVenta,
    modificarVenta
} = require('../controllers/ventas');

routerV.get('/', obtenerVentas)
routerV.post('/', crearVenta)
routerV.put('/:cantidad', modificarVenta)
routerV.delete('/', eliminaVenta)

module.exports = routerV;

