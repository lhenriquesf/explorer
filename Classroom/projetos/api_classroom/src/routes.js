const { Router, response } = require('express');

const routes = Router();

const posts = [];

function getPostById(id){
    return posts.findIndex(post => post.id === id);
}

routes.get('/posts', (resquest, response)=>{
    response.json(posts);
});

routes.post('/posts', (resquest, response)=>{
    const newPost = resquest.body;

    posts.push(newPost);

    return response.json(newPost);
});

routes.get('/posts/:id', (resquest, response)=>{
    const { id } = resquest.params;

    const postIndex = getPostById(id);
    const post = posts[postIndex];

    response.json(post);
});

module.exports = routes;
