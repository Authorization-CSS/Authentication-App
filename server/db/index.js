const sequelize = require('sequelize');

const db = new sequelize('postgres://localhost:5432/boilermaker',
{
    logging:false
})

module.exports = db;