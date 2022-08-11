const sequelize = require('sequelize');

const db = new sequelize('postgres://localhost:5432/authentication-app',
{
    logging:false
})

module.exports = db;