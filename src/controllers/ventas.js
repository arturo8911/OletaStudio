const Venta = require('../modules/Venta')

//read
function obtenerVentas(req, res){
    Venta.find()
    .then(data => res.status(200).send(data))
}
//create
function crearVenta(req, res){
    const info = req.body;
    const cantidad = new Venta(info)
    cantidad.save()
    .then(data => res.send(data))
}
//delete
function eliminaVenta(req, res){
    const pedido_id = req.body.pedido_id;
    Venta.findOneAndDelete({cantidad : quantity})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
}
//update
function modificarVenta(req, res){
    const quantity = req.params.cantidad;
    const nuevaInfo = req.body;
    Venta.findOne({nombre : quantity})
    .then(cantidad => {
        cantidad = req.body
        cantidad.save()
        .then(data => {
            res.status(200).send(data);
        })
    })
}

module.exports = {
    obtenerVentas,
    crearVenta,
    eliminaVenta,
    modificarVenta
}

