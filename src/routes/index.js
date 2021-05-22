const router = require('express').Router();

const posts = require('../controllers/posts'); // chamando o controller responsável por realizar as ações

// criar posts (POST)
router.post('/newpost', posts.newPost);

// página home da aplicação
router.get('/', posts.getPost);

// formulário de envio
router.get('/createPost',(req,res)=>{
    res.render('createPost')
});

module.exports = router;