const express = require('express');
const mongoose = require("mongoose")

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongoose.connect(uri);
mongoose.connect(process.env.MONGOURI);

app.use('/v1', require('./src/routes'));

//const PORT = 4001;
//app.listen(PORT, () => console.log(`The Server is Alive!!`))

app.listen(process.env.PORT, () => console.log(`The Server is Alive!!`))


app.get('/',(req, res)=> res.send("Bienvenido a Oleta Studio Diseños personalizados a todo color...!!"))