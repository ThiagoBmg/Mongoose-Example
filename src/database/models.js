const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String
});

const post = mongoose.model('post', postSchema);

module.exports = post;