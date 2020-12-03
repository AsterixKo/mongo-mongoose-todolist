const express = require('express');
const cors = require('cors');
const pruebaRouter = require('./routes/pruebaRouter');
const noteRouter = require('./routes/noteRouter');
const connection = require('./config/connection');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(
    connection.url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// app.use('/prueba', pruebaRouter);
app.use('/notes', noteRouter);

app.get('/', (req, res)=>{
    res.status(200).send('<h2>Llama a la ruta específica</h2>')
});

app.listen(3000, ()=>console.log('Aplicacion corriendo en el puerto 3000'));
