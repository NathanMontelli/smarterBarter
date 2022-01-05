const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Item extends Model { }

//items have an id, a name, and reference the category.js PK
Item.init({
  item_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'item'
})

module.exports = Item