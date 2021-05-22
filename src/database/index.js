const mongoose = require('mongoose');

const mongodbConn =  mongoose.connect('mongodb://localhost/lab13', {useNewUrlParser: true, useUnifiedTopology: true}); // string de conexão com o banco de dados e configuração padrão do mongoose

const db = mongoose.connection; // conectando com o banco de dados  

db.on('error', ()=>{console.error('dbConn error')}); // caso tenha algum erro com a connexão 
db.once('open', ()=>{console.error('\n Banco de dados conectado')}); // quadno uma nova conexão é aberta