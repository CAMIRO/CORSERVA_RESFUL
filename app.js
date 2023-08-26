const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./util/database')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

app.get('/', (req, res, next) => {
  res.send('Hello world!')
})

// CRUD routes
app.use('/items', require('./routes/items'))

// error handling
app.use((error, req, res, next) => {
  console.error(error)
  const status = error.statusCode || 500
  const message = error.message
  res.status(status).json({ message })
})

// sync database
sequelize
  .sync()
  .then(result => {
    console.log('Database connected')
    app.listen(5000)
  })
  .catch(err => console.log(err))
