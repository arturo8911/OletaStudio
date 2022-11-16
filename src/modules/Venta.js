const mongoose = require ("mongoose");
const Pedido = require("./Pedido");

const VentaSchema = mongoose.Schema({
    precio_unitario : Number,
    cantidad : Number,
    pedido_id : String
},{
    collection: "detallePedido",
    timestamps: true
})


const Venta = mongoose.model("Venta", VentaSchema);

module.exports = Venta