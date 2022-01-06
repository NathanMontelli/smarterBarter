const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.smarterbarter_db)

module.exports = sequelize
