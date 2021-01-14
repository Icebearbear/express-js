// db
// const {users} = require('../config/db')
const db = require('../model/index')
const User = db.user

exports.createUser = (req,res) => {
    const name = req.body.name
    const password = req.body.password
    const email = req.body.email

    /* (local)
    //check if user exists, if not add to db
    // some return a bool
    let userExists = users.some((item) => item.name === name || item.email === email)
    if(userExists){ // if user exists, send error message 
        res.status(403).json({
            message: "name or email is already exists"
        })
    } else {
        users.push({ // if user doesnt exist, push to db adn return success message
            name: name,
            password: password,
            email:email
        })
        res.status(201).json({ 
            message: "successfully created user"
        })
    } 
    */

    // add data to mysql
    User.create({
        name: name,
        password: password,
        email: email
    })
    .then(user => {
        res.status(201).send(user)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.signInUser = (req,res) => {
    const name = req.body.name
        const password = req.body.password
        
        /* (local)
        // filter will return an array and [0] to assess that object
        let user = users.filter((item) => item.name === name && item.password === password)[0]

        if(!user){ // if user doesnt exist, return error code
            res.status(404).json({
                message: 'user not found'
            })
        } else {
            res.status(200).json({ // if user exists, return the json data
                name: user.name,
                email: user.email
            })
        }
        */

        //add data to mysql
        User.findOne({
            where: {
                name: name
            }
        })
        .then(user => {
            if(!user){
                res.status(404).send({
                    message: 'user not found'
                })
            }
            if(user.password != password){
                res.status(401).send({
                    message: 'invalid password'
                })
            }

            res.status(200).send({
                id : user.id,
                name : user.name,
                email : user.email,
                password : user.password
            })

        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            })
        })
}

exports.getAllUser = (req, res) => {
    // db (local)
    // res.json(users)

    // promise, waiting to receive the data, dont do anything while waiting
    User.findAll().then((data) => {
        res.status(200).send(data)
    }).catch(err => {
        res.status(500).send({
            message : err.message,
        })
    })
}