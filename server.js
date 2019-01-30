require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const MONGOD_URI = process.env.MONGOD_URI
const PORT = process.env.PORT || 3001
// const usersRoutes = require('/routes/users.js')

mongoose.connect(MONGOD_URI, { useNEWUrlParser: true }, (err) => {
  console.log(err || 'Connected to MOngoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (rew, res) => {
  res.json({ message: 'API root' })
})

// app.use('/api/users', usersRoutes)

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}.`)
})
