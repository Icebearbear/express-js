// get the db configuration from db.js and use it later
const dbConfig = require('../config/db')
const Sequelize = require('sequelize')

//db (local)
// const db = require('../config/db')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.DIALECT,
    operatorAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
})

db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// set the tables layout from these files
// each name represents a table
db.user = require('./user')(sequelize, Sequelize)
db.post = require('./post')(sequelize, Sequelize)

module.exports = db