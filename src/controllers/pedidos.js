const Pedido = require('../modules/Pedido')

//read
function obtenerPedidos(req, res){
    Pedido.find()
    .then(data => res.status(200).send(data))
}
//create
function crearPedido(req, res){
    const info = req.body;
    const pedido = new Pedido(info)
    pedido.save()
    .then(data => res.send(data))
}
//delete
function eliminaPedido(req, res){
    const estado = req.body.estado;
    Pedido.findOneAndDelete({estado : condition})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}
//update
function modificarPedido(req, res){
    const condition = req.params.estado;
    const nuevaInfo = req.body;
    Producto.findOne({estado : condition})
    .then(total => {
        total = req.body
        total.save()
        .then(data => {
            res.status(200).send(data);
        })
    })
}

module.exports = {
    obtenerPedidos,
    crearPedido,
    eliminaPedido,
    modificarPedido
}

