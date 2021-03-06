const path = require('path')
const express = require('express')

const server = express()

const birds = require('./routes/birdRoutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1', birds)

module.exports = server



