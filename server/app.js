const express = require('express')
const app = express()
const multer = require('multer')

require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/public'))
app.use('/uploads', express.static('uploads'))

const port = process.env.PORT

const mainRouter = require('./routes/main.routes')

app.use('/api/v1', mainRouter)
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
