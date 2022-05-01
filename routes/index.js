const express = require('express')
const router = express();
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

module.exports = router