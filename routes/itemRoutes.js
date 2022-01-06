const router = require('express').Router()
const { Item, Note, User } = require('../models')
const passport = require('passport')
const req = require('express/lib/request')
const res = require('express/lib/response')

// GET all posts
router.get('/items', passport.authenticate('jwt'), async function (req, res) {
  const items = await Item.findAll({ include: [User, Note] })
  res.json(items)
})


//get one item
router.get('/items/:id', passport.authenticate('jwt'), async function (req, res) {
  const item = await Item.findOne({ where: { id: req.params.id } , include: [User, Note] })
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


module.exports = router