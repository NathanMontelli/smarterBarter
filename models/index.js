const Category = require('./Category.js')
const Item = require('./Item.js')
const User = require('./User.js')
const Post = require('./Post.js')

//categories can have many items
Category.hasMany(Item, { foreignKey: ' ' })  // Need to add foreign key!!!!!!!!!
//items belong to a category 
Item.belongsTo(Category, { foreignKey: ' '}) // Need to add foreign key!!!!!!!!!
//users can have many posts
User.hasMany(Post, { foreignKey: ' ' })  // Need to add foreign key!!!!!!!!!
//posts only belong to one user
Post.belongsTo(User, { foreignKey: ' ' }) // Need to add foreign key!!!!!!!!!


module.exports = { 
  Category,
  User, 
  Post,
  Item
}