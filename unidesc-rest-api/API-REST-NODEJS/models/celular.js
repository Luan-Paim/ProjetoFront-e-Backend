const mongoose = require('mongoose');

const celularSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    empresa: String,
    modelo: String,
    preco: Number
});


module.exports = mongoose.model('Celular', celularSchema);