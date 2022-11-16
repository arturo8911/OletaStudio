const Producto = require('../modules/Producto')

//read
function obtenerProductos(req, res){
    Producto.find()
    .then(data => res.status(200).send(data))
}
//create
function crearProducto(req, res){
    const info = req.body;
    const prod = new Producto(info)
    prod.save()
    .then(data => res.send(data))
}
//delete
/* function eliminaProducto(req, res){
    const nombre = req.body.nombre;
    Producto.findOneAndDelete({nombre : name})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err))
} */
function eliminaProducto(req, res){
    const idProducto = req.params._id;
    Producto.findOneAndDelete({_id: idProducto})
    .then(data => res.status(200).send({message: 'El producto ha sido eliminado'}))
    .catch(error => res.status(500).send({message: `Error al borrar el producto con id=${idProducto}. ¡No se encontró el producto!`}))
}
//update
/* function modificarProducto(req, res){
    const name = req.params.nombre;
    const nuevaInfo = req.body;
    Producto.findOne({nombre : name})
    .then(producto => {
        producto = req.body
        producto.save()
        .then(data => {
            res.status(200).send(data);
        })
    })
}
 */

function modificarProducto (req, res) {
    const idProducto = req.params._id;
    Producto.findByIdAndUpdate(idProducto, req.body, { useFindAndModify: false })
       .then(data => {
         if (!data) {
           res.status(404).send({
             message: `No se puede actualizar el producto con id=${idProducto}. ¡No se encontró al producto!`
           });
         } else res.send({ message: "El producto se actualizó con éxito." });
       })
       .catch(err => {
         res.status(500).send({
           message: "Error al actualizar al producto con id=" + idProducto
         });
       });
};


module.exports = {
    obtenerProductos,
    crearProducto,
    eliminaProducto,
    modificarProducto
}

