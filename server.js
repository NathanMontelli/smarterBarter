require('dotenv').config()

const express = require('express')
const { join } = require('path')

const passport = require('passport')
const { User, Item, Category, Note } = require('./models') 
//prevents being signed out on page load
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const FacebookStrategy = require("passport-facebook").Strategy;

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
    const user = await User.findOne({ where: { id }, include: [Item, Note] }) // add note??
    cb(null, user)
  } catch (err) {
    cb(err, null)
  }
}))

passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID_FB,
  clientSecret: process.env.CLIENT_SECRET_FB,
  callbackURL: "http://localhost:3000/auth/facebook/secrets"
},
  function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/secrets',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  });

app.use(require('./routes'))

async function init() {
  await require('./db').sync()
  app.listen(process.env.PORT || 3000)
}

init()