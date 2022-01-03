const router = require('express').Router()
const { Item, Category, Note, User } = require('../models')
const passport = require('passport')

// find all categories
router.get('/categories', async function (req, res) {
  const categories = await Category.findAll({ include: [Item] })
  res.json(categories)
})

  // create a new category
router.post('/categories', async function (req, res) {
  const categories = await Category.create(req.body)
  res.status(200).json(categories)
})

module.exports = router
