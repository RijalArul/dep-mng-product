const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = process.env.PORT

const mainRouter = require('./routes/main.routes')

app.use('/api/v1', mainRouter)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
