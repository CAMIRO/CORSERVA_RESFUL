
const express = require('express')
const bodyparser = require('body-parser')
const sequelize = require('./util/database')

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
})

app.get('/', (req, res, next)=>{
    res.send('hello world!')
})


// CRUD routes
app.use('/items', require('./routes/items'))

// error handling
app.use((error, req, res, next) =>{
    console.log(error);
    const status = error.statusCode || 500
    const message = error.message;
    res.status(status).json({ message: message })
})


// sync database
sequelize
    .sync()
    .then(result =>{
        console.log('Database connected');
        app.listen(5000)
    })
    .catch(err => console.log(err))

