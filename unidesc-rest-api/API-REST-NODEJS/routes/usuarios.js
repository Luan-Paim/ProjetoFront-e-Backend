const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios');
const mongoose = require('mongoose');

//recuperando todos os produtos
router.get('/', (req, res) => {
    Usuario.find()
    .exec()
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({
            erro:err
        })
    });
    
});


//recuperando um único produto
router.get('/:usuarioId', (req, res) => {
    const id = req.params.produtoId;
    Usuario.findById(id)
    .then(id => {
        res.status(200).json({
            message: 'Usuario encontrado',
            usuario: id
        })
    })
    .catch(err => {
        res.status(500).json({
            erro: err
        })
    });            
});

//salvando um produto
router.post('/', (req, res, next) => {

    const usuario = new Usuario({
            _id: new mongoose.Types.ObjectId(),
            nome:  req.body.nome,
            email: req.body.email
    });

    usuario.save()
    .then(result => {
        res.status(201).json({
            message: 'Usuario salvo',
            usuario: usuario
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    });

    
});

//atualizando um produto
router.put('/:usuarioId', (req, res, next) =>{
    const id = req.params.usuarioId;
    Usuario.findByIdAndUpdate(id, req.body)    
    
    .then(id => {        
        res.status(200).json({
            message: 'Usuario encontrado e atualizado',
            usuario: id
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
});

//deletando um produto
router.delete('/:usuarioId', (req, res, next) =>{
    const id = req.params.usuariooId;
    Usuario.findByIdAndDelete(id)

    .then(id => {
        res.status(200).json({
            message: 'Usuario encontrado e deletado',
            usuario:id
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
});

module.exports = router;