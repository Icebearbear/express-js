const router = require('express').Router() // router

// db (local)
// const {posts, users} = require('../config/db')

//controllers import
const postController = require('../controller/posts')
const userController = require('../controller/users')

// export function that take in app as argument to perform the requests
module.exports = (app) => {
    // hello world
    app.get('/' , postController.starter)

    // get all posts
    app.get('/posts', postController.findAllPosts)
    
    // add data to posts
    app.post('/posts', postController.addPosts)

    // create user for post request on /sign-up
    app.post('/sign-up', userController.createUser)

    // check if user exist when signing in
    app.post('/sign-in', userController.signInUser)

    // get users from db
    app.get('/users' , userController.getAllUser)
}
