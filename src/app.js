'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conectar banco
// ConnectionString Aqui
const mongo = mongoose.connect(connectionString, { useNewUrlParser: true });

mongo.then(() => {
    console.log('Banco de dados conectado');
}).catch((err) => {
    console.log('Erro ao conectar banco de dados', err);
});

// Carrega os Models
const Product = require('./models/product');

// Carrega as rotas.
const index = require('./routes/index')
const product = require('./routes/product')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index);
app.use('/products', product);

module.exports = app;