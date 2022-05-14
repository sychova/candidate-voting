const express = require('express')
const session = require('express-session')
const hbs = require('hbs')
const path = require('path')
const { flash } = require('express-flash-message')
const bodyParser = require('body-parser')
const router = require('../config/router')

const app = express()

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  }),
)
app.use(flash({ sessionKeyName: 'flashMessage' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)
app.use(express.json())
app.use(express.static(publicDirPath))

module.exports = app
