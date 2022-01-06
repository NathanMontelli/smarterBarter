const { Sequelize } = require('sequelize')

module.exports = new Sequelize(process.env.NODE_ENV !== 'production' ? process.env.JAWSDB_URL : 'mysql://root:Abc123!!@localhost:3306/smarterBarter_db')
