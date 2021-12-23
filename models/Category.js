const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Category extends Model { }

//each category has an id and a name
Category.init({ 
  id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'category'
})

module.exports = Category
