const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.LOCAL_DB_URL)

module.exports = sequelize
