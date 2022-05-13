const express = require('express')
const hbs = require('hbs')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('../config/router')

const app = express()

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