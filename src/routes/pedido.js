const routerPed = require("express").Router();
const {
    obtenerPedidos,
    crearPedido,
    eliminaPedido,
    modificarPedido
} = require('../controllers/pedidos');

routerPed.get('/', obtenerPedidos)
routerPed.post('/', crearPedido)
routerPed.put('/:total', modificarPedido)
routerPed.delete('/', eliminaPedido)

module.exports = routerPed;

