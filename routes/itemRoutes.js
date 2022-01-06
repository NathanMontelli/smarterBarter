const router = require('express').Router()
const { Item, Category, Note, User } = require('../models')
const passport = require('passport')
const req = require('express/lib/request')
const res = require('express/lib/response')

// GET all posts
router.get('/items', passport.authenticate('jwt'), async function (req, res) {
  const items = await Item.findAll({ include: [User, Category, Note] })
  res.json(items)
})


//get one item
router.get('/items/:id', passport.authenticate('jwt'), async function (req, res) {
<<<<<<< HEAD
<<<<<<< HEAD
  const item = await Item.findOne({ where: { id: req.params.id } , include: [User, Category, Note] })
=======
  const item = await Item.findOne({ where: {id: req.params.id }, include: [User, Category, Note] })
>>>>>>> 021ae8640aa7f003b637290c44c03c8a256c1a35
=======
  const item = await Item.findOne({ where: { id: req.params.id } , include: [User, Category, Note] })
>>>>>>> 46e7d836e009a41a94dfa895a8a38a3114d14f62
  res.json(item)
})

// POST one post
router.post('/items', passport.authenticate('jwt'), async function (req, res) {
  const item = await Item.create({
    item_name: req.body.item_name,
    title: req.body.title,
    body: req.body.body,
    cid: req.body.cid,
    uid: req.user.id,
    photo: req.body.photo,
    type: req.body.type,
    condition: req.body.condition
  })
  res.json()
})

// DELETE one post
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 46e7d836e009a41a94dfa895a8a38a3114d14f62
router.delete('/items/:id', passport.authenticate('jwt'), async function (req, res) {
  await Item.destroy({ where: { id: req.params.id } })
  res.sendStatus(200)
})
<<<<<<< HEAD
=======
// router.delete('/items/:id', passport.authenticate('jwt'), async function ({ params: { id } }, res) {
//   await Item.destroy({ where: { id } })
//   res.sendStatus(200)
// })
>>>>>>> 021ae8640aa7f003b637290c44c03c8a256c1a35
=======
>>>>>>> 46e7d836e009a41a94dfa895a8a38a3114d14f62

module.exports = router