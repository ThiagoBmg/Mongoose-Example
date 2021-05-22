const express = require('express');
const bodyParser = require('body-parser'); // body-parser deprecated undefined extended: provide extended option index.js:6:20
const app = express();

require('./src/database'); // iniciando banco de dados

app.use(bodyParser.urlencoded()); // body-parser deprecated undefined extended: provide extended option index.js:6:20
app.use(express.json()); // trabalhando com formato json nas requisições 

app.use(express.static('./public')); // permitindo o acesso a pasta public para acesso aos assets 
app.set('view engine', 'ejs'); // não é necessário declarar o app.set para o diretório views pois é padrão do ejs este caminho 

app.use(require('./src/routes')); // definindo as rotas

// iniciando servidor
app.listen(8080, ()=>{ 
    console.log('\n App rodando na porta 3000')
})