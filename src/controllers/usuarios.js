const Usuario = require('../modules/Usuario')

//read
function obtenerUsuarios(req, res){
    newFunction()
    .then(data => res.status(200).send(data))
    function newFunction() {
        return Usuario.find();
    }
}
//create
function crearUsuario(req, res){
    const info = req.body;
    const name = new Usuario(info)
    name.save()
    .then(data => res.send(data))
}
//delete
function eliminaUsuario(req, res){
    const idUsuario = req.params._id;
    //const idUsuario = req.body._id;
    Usuario.findOneAndDelete({_id: idUsuario})
    //.then(data => res.send(data))
    .then(data => res.status(200).send({message: 'El usuario ha sido eliminado'}))
    //.catch(error => res.status(500).send(error))
    .catch(error => res.status(500).send({message: `Error al borrar el Usuario`}))
}

//update
/* function modificarUsuario(req, res) {
    const idUsuario = req.params._id;
    const nuevaInfo = req.body;
    Usuario.findOne({_id : idUsuario})
    .then(usuarios => {
        usuarios = req.body
        usuarios.save()
        .then(data => {
            res.status(200).send(data);
        })
    })
}
 */
    


function modificarUsuario (req, res) {
     const idUsuario = req.params._id;
     Usuario.findByIdAndUpdate(idUsuario, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `No se puede actualizar el usuario con id=${idUsuario}. ¡No se encontró al usuario!`
            });
          } else res.send({ message: "El usuario se actualizó con éxito." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error al actualizar al Usuario con id=" + idUsuario
          });
        });
};
 



module.exports = {
    obtenerUsuarios,
    crearUsuario,
    eliminaUsuario,
    modificarUsuario
}

