const express = require('express')
const router = express()

const thoughts = require('./thoughtRoutes')
const users = require('./userRoutes')

router.use('/thoughts', thoughts)
router.use('/users', users)

module.exports = router