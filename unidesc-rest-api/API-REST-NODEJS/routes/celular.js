const express = require('express');
const router = express.Router();
const Celular = require('../models/celular');
const mongoose = require('mongoose');

//recuperando todos os produtos
router.get('/', (req, res) => {
    Celular.find()
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
router.get('/:celularId', (req, res) => {
    const id = req.params.celularId;
    Celular.findById(id)
    .then(id => {
        res.status(200).json({
            message: 'Celular encontrado',
            celular: id
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

    const celular = new Celular({
            _id: new mongoose.Types.ObjectId(),
            nome:    req.body.nome,
            empresa: req.body.empresa,
            modelo:  req.body.modelo,
            preco:   req.body.preco
    });

    celular.save()
    .then(result => {
        res.status(201).json({
            message: 'Celular salvo',
            celular: celular
        });
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    });

    
});

//atualizando um produto
router.put('/:id', (req, res, next) =>{        
    Celular.findByIdAndUpdate({_id:req.params.id})  
    .then(id => {        
        res.status(201).json({
            message: 'Celular atualizado'            
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
});

//deletando um produto
router.delete('/:id', (req, res, next) =>{    
    Celular.deleteOne({_id:req.params.id})
    .then(result => {
        res.status(201).json({
            message: 'Celular deletado'            
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
});

module.exports = router;