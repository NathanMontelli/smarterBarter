const Category = require('./Category.js')
const Item = require('./Item.js')
const User = require('./User.js')
const Note = require('./Note.js')

//categories can have many items
Category.hasMany(Item, { foreignKey: 'category_id' })  
//items belong to a category 
Item.belongsTo(Category, { foreignKey: 'category_id' }) 

//users can have many items
User.hasMany(Item, { foreignKey: 'uid' })  
//items belon to a user
Item.belongsTo(User, { foreignKey: 'uid' })

//Items cans have many comments
Item.hasMany(Note, { foreignKey: 'item_name' })
//comments belong to an item(post)
Note.belongsTo(Item, { foreignKey: 'item_name' })

module.exports = { 
  Category,
  User, 
  Item,
  Note
}