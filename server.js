require('dotenv').config()

const express = require('express')
const { join } = require('path')

const passport = require('passport')
const { User, Note, Item } = require('./models')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, async function ({ id }, cb) {
  try {
    const user = await User.findOne({ where: { id }, include: [Item, Note] })
    cb(null, user)
  } catch (err) {
    cb(err, null)
  }
}))

app.use(require('./routes'))

async function init() {
  await require('./db').sync()
  app.listen(process.env.PORT || 3000)
}

init()