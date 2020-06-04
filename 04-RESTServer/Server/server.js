require('./Config/config');

const express = require('express');
const mongoose = require('mongoose');


const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
    res.send([
        { id: 1, user: 'Andres Venegas', activo: true},
        { id: 2, user: 'Arturo Venegas', activo: true},
        { id: 3, user: 'Kamila Venegas', activo: true},
        { id: 4, user: 'Esteban Venegas', activo: true}
    ]);
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    res.send({
        body
    });
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.send({
        id
    });
});

mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if(err) throw err;

    console.log('Base de datos');
});

app.listen(process.env.PORT, () => {
    console.log('Listen at port: ', process.env.PORT);
});