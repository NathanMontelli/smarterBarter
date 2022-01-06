const { Sequelize } = require('sequelize')

// module.exports = new Sequelize(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : 'mysql://root:Abc123!!@localhost:3306/smarterBarter_db')
module.exports = new Sequelize(process.env.JAWSDB_URL || process.env.LOCALDB_URL)