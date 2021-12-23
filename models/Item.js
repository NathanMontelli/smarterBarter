const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Item extends Model { }

//items have an id, a name, and reference the category.js PK
Item.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: { model: 'category', key'id'}
  }
}, {
  sequelize,
  modelName: 'item'
})

module.exports = Item