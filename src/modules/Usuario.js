const mongoose = require ("mongoose"); 

const UsuarioSchema = mongoose.Schema({
    name : {type: String, require: true},
    //phone: {type: String, require: true, match: [/(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/]},
    phone: {type: String, require: true},
    address: {type: String, require: true},
    email: {type: String, require: true},
    //email: {type: String, require: [true, 'El correo es obligatorio'], pattern: ['.+@globex\.com']},
    //password: {type : String, require:[true, 'La contraseña es obligatoria'], match: [/(?=.*[a-zA-Z])(?=.*[0-9]+).*/]},
    password: {type : String, require: true},
},{
    
    collection: "Usuarios",
    timestamps: true
})

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario