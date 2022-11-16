const mongoose = require ("mongoose"); 

const AdministracionSchema = mongoose.Schema({
    nombre : {type: String, require: true},
    contrasena: {type : String, require:[true, 'La contraseña es obligatoria'], match: [/(?=.*[a-zA-Z])(?=.*[0-9]+).*/]},
},{
    collection: "Administracion",
    timestamps: true
})


const Administracion = mongoose.model("Administracion", AdministracionSchema);

module.exports = Administracion