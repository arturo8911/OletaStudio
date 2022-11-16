const mongoose = require ("mongoose"); 
const Producto = require("./Producto");
const Usuario = require("./Usuario");

const PedidoSchema = mongoose.Schema({
    date : {type: Date, require: true},
    estado: String,
    total : Number,
    productos_id: String,
    usuario_id: String,
},{
    collection: "Pedido",
    timestamps: true
})


const Pedido = mongoose.model("Pedido", PedidoSchema);

module.exports = Pedido