const Administracion = require('../modules/Administracion')

//read
function obtenerAdministracion(req, res){
    Administracion.find()
    .then(data => res.status(200).send(data))
}
//create
function crearAdministracion(req, res){
    const info = req.body;
    const nombreUsuario = new Administracion(info)
    nombreUsuario.save()
    .then(data => res.send(data))
}
//delete
function eliminaAdministracion(req, res){
    const nombre = req.body.nombre;
    Administracion.findOneAndDelete({nombre : name})
    .then(data => res.send(data))
    .catch(error => res.status(500).send(error))
}
//update
function modificarAdministracion(req, res){
    const name = req.params.nombre;
    const nuevaInfo = req.body;
    Administracion.findOne({nombre : name})
    .then(nombreUsuario => {
        nombreUsuario = req.body
        nombreUsuario.save()
        .then(data => {
            res.status(200).send(data);
        })
    })
}

module.exports = {
    obtenerAdministracion,
    crearAdministracion,
    eliminaAdministracion,
    modificarAdministracion
}

