/*
//db (local)
let posts = [
    {
        name: "Icebear",
        content: "Icebear is hungry"
    }
]

let users = []

module.exports = {
    posts: posts,
    users: users
}
*/

module.exports = {
    HOST: '18.136.0.11',
    USER: 'root',
    PASSWORD: 'password',
    PORT: '3306',
    DB: 'IAP',
    DIALECT: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, // three sec
        idle: 10000, // one sec
    },

}