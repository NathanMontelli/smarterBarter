require('dotenv').config

const { User, Item, Note, Category } = require('../models')
const sequelize = require('../db')

async function seeder() {
  await sequelize.sync({ force: true })

  console.log('-----------------Seeding Data-----------------')

  try {
    await User.register(new User({ username: 'nathanmontelli', email: 'nathanmontelli@gmail.com' }), 'password1234')
    await User.register(new User({ username: 'oliver', email: 'oliver@gmail.com' }), 'password4321')
    await User.register(new User({ username: 'alan', email: 'alan@gmail.com' }), 'rootroot')
    await Item.bulkCreate(require('./itemSeed.js'))
    await Note.bulkCreate(require('./noteSeed.js'))
    await Category.bulkCreate(require('./categorySeed.js'))
  } catch (err) {
    console.log(err)
  }

  console.log('-----------------Data Seeded-----------------')

  process.exit()
}

seeder()