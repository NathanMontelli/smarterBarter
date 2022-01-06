const router = require('express').Router()
const { Item, Note, User } = require('../models')
const passport = require('passport')

// GET all comments
router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Note.findAll({ include: [User, Item] })
  res.json(notes)
})

// POST one comment
router.post('/notes', passport.authenticate('jwt'), async function (req, res) {
  const note = await Note.create({
    body: req.body.body,
    iid: req.body.iid,
    uid: req.user.id
  })
  res.json(note)
})

router.get('/notes/:id', passport.authenticate('jwt'), async function (req, res) {
  const note = await Note.findAll({ where: { iid: req.params.id }, include: [User] })
  res.json(note)
})


module.exports = router