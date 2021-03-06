
const Item = require('./Item.js')
const User = require('./User.js')
const Note = require('./Note.js')

//users can have many items
User.hasMany(Item, { foreignKey: 'uid' })  
//items belon to a user
Item.belongsTo(User, { foreignKey: 'uid' })

User.hasMany(Note, { foreignKey: 'uid' })
//items belon to a user
Note.belongsTo(User, { foreignKey: 'uid' })


//Items cans have many comments
Item.hasMany(Note, { foreignKey: 'iid' })
//comments belong to an item(post)
Note.belongsTo(Item, { foreignKey: 'iid' })

User.hasMany(Note, { foreignKey: 'uid' })  

Note.belongsTo(User, { foreignKey: 'uid' })

module.exports = { 
  User, 
  Item,
  Note
}