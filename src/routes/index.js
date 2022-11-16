const router = require("express").Router();
router.get('/',(req, res)=>{
    res.send("Bienvenido a Oleta Studio")
})

router.use('/productos', require('./producto'));
router.use('/administracion', require('./administracion'));
router.use('/usuarios', require('./usuario'));
router.use('/pedidos', require('./pedido'));
router.use('/ventas', require('./venta'));

module.exports = router