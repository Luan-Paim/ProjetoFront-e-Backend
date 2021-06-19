const express = require ('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const celularRoutes = require('./routes/celular');
const usuariosRoutes = require('./routes/usuarios');
const mongoose = require('mongoose');
app.use(morgan('dev'));

mongoose.connect('mongodb+srv://unidesc:unidesc@unidesc.kg8gk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

//TRATANDO O CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method == "OPTIONS"){
        req.header("Access-Control-Allow-Methods", "PUT, POST, PATH, GET, DELETE");
        return res.status(200).json({});
    }
    next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/celular', celularRoutes);
app.use('/usuarios', usuariosRoutes);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;