const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(express.static(__dirname + '/public'))
app.use('/uploads', express.static('uploads'))

// const port = process.env.PORT

const mainRouter = require('./routes/main.routes')

app.use('/api/v1', mainRouter)

module.exports = app
