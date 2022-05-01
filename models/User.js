const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  thought: { type: Array, required: false },
  friend: { type: Array, required: false },
})

const User = mongoose.model('User', userSchema)

const handleError = (err) => console.error(err)

module.exports = User