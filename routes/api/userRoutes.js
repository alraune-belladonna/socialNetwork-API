const express = require('express');
const User = require('../../models/Use')
const app = express();

app.post('/', async ({ body }, res) => {
  try {
    const user = await User.create(body)
    res.json(user)
  } 
})

app.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } 
})

app.get('/:id', async ({ params: { id } }, res) => {
  try {
    const user = await User.findOne({ _id: id })
    res.json(user)
  } 
})

module.exports = app