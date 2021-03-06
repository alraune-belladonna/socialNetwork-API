const express = require('express')
const db = require('./config/connection')

const { Post, User } = require('./models')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`)
  })
})