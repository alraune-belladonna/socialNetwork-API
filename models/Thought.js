const mongoose = require('mongoose')

const thoughtSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  thoughtName: { type: String, required: true },
  thought: { type: String, required: true, length: [1, 2000] },
  datePosted: { type: Date, default: Date.now },
})

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought