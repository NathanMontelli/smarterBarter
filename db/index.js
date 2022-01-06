const { Sequelize } = require('sequelize')

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const sequelize = new Sequelize(process.env.LOCAL_DB_URL)

module.exports = sequelize
=======
module.exports = new Sequelize(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : 'mysql://root:Abc123!!@localhost:3306/smarterBarter_db')
>>>>>>> 021ae8640aa7f003b637290c44c03c8a256c1a35
=======
module.exports = new Sequelize(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : 'mysql://root:rootroot@localhost:3306/smarterBarter_db')
>>>>>>> 46e7d836e009a41a94dfa895a8a38a3114d14f62
=======
module.exports = new Sequelize(process.env.JAWSDB_URL || process.env.LOCALDB_URL)
>>>>>>> 50af57c13b2f9263e94bd83a6882854e1bf6729a
