const express = require('express')
const bodyParser = require('body-parser')
// const db = require('./config/db')
const app = express()
const port = 5000
app.use(bodyParser.json())

// db 
// connection form server to db, only once when the server started
const db = require('./model/index')
db.sequelize.sync()

// import in the index.js file while passing in app as parameter
// routes
require('./routes/index')(app) 

app.listen(port, () => {
    console.log('Listening to port' , port)
})