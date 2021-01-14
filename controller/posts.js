// db (local)
// const {posts} = require('../config/db')

// mysql
const db = require('../model/index')

// get the table post
const Post = db.post

exports.starter = (req,res) => {
    res.send('<h1 style="color: red">Hello world</h1>')
}

exports.findAllPosts = (req,res) => {
    // promise, waiting to receive the data, dont do anything while waiting
    Post.findAll().then((data) => {
        res.status(200).send(data)
    }).catch(err => {
        res.status(500).send({
            message : err.message,
        })
    })

    // send data to client (local)
    // res.json(posts) // the same as .send but in json format
}

exports.addPosts = (req,res) => {
    const name = req.body.name // get data called name from client
    const title = req.body.title
    const content = req.body.content // get data called content from client
    const tag = req.body.tag

    /* (local)
    // add data to db
    posts.push({
        name: name,
        title:title,
        content: content,
        tag: tag
    })
    
    // send some data back to the client
    res.json(posts)
    */

    // add data to mysql
    Post.create({
        name: name,
        title: title,
        content: content,
        tag: tag
    })
    .then(post => {
        res.status(201).send(post)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message,
        })
    })
}