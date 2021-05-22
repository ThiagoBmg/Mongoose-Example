const dbPost = require('../database/models');

module.exports={
    getPost(req, res){
        dbPost.find((err,objs)=>{
            if(err) return res.status(400).send({status:'Erro ao buscar posts'});
            res.status(200).render('blog', {status: objs});
        })
    },
    
    newPost(req,res){
        try {
            let {title, summary, content} = req.body || null; // pegando os valores do post
            var newPost = new dbPost({title,summary,content}); // criando novo post com o model do banco de dados
            newPost.save(); // salvando novo post 
            //console.log(newPost)
            res.status(200).send({status: 'post criado com sucesso'});  // retornando o sucesso ao salvar post
        } catch (error) {
            res.status(400).send({status: 'Errouuuuuu bixo'}); // tratando erro, retorna um status do falstão 
        }     
    }
}