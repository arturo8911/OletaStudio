const mongoose = require ("mongoose"); 

const ProductoSchema = mongoose.Schema({
    codigo: String,
    nombre : {type: String, require: true},
    imagen: String,
    description : String,
    category: {type : String, enum:['Aluminio', 'Ceramica', 'Cristal', 'Textil', 'Insumo', 'Otros']},
    precio: Number,
    color: {type : String, enum:['Amarillo', 'Azul', 'Rojo', 'Verde', 'Blanco']},
      
},{
    collection: "Productos",
    timestamps: true
})


const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto