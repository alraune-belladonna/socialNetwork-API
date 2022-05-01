const express = require('express');
const Post = require('../../models/Thought')
const app = express()

app.post('/', async ({ body }, res) => {
  try {
    const post = await Post.create(body)
    res.json(post)
  } 
})

app.get('/', async (req, res) => {
  try {
    const posts = await Post.find({})
    res.json(posts)
  }
})

app.get('/:id', async ({ params: { id } }, res) => {
  try {
    const post = await Post.findOne({ _id: id })
    res.json(post)
  } 
})

app.delete('/:id', async ({ params: { id } }, res) => {
  try {
    await Post.findByIdAndDelete(id)
    res.json({ message: 'Post Deleted' })
  } 
})

module.exports = app