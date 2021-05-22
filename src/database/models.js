const mongoose = require('mongoose');

// criando o schema para os posts 
const postSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String
});

const post = mongoose.model('post', postSchema);

module.exports = post;