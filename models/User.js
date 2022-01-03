const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model { }

//users have a username and have to enter an email
User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user'
})

module.exports = User
