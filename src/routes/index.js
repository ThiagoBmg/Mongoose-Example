const router = require('express').Router();

const posts = require('../controllers/posts'); // chamando o controller responsável por realizar as ações

// criar posts (POST)
router.post('/newpost', posts.newPost);

router.get('/', posts.getPost);

router.get('/createPost',(req,res)=>{
    res.render('createPost')
});

module.exports = router;