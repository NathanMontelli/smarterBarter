require('dotenv').config()

const { Sequelize } = require('sequelize')

<<<<<<< HEAD
const sequelize = new Sequelize(process.env.LOCAL_DB_URL)

module.exports = sequelize
=======
module.exports = new Sequelize(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : 'mysql://root:Abc123!!@localhost:3306/smarterBarter_db')
>>>>>>> 021ae8640aa7f003b637290c44c03c8a256c1a35
