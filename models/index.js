const Category = require('./Category.js')
const Item = require('./Item.js')
const User = require('./User.js')

//categories can have many items
Category.hasMany(Item, { foreignKey: 'category_id' })  
//items belong to a category 
Item.belongsTo(Category, { foreignKey: 'category_id '}) 
//users can have many items
User.hasMany(Item, { foreignKey: 'uid' })  



module.exports = { 
  Category,
  User, 
  Item
}