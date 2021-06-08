const express = require('express')
const path = require('path')

const filePath = path.join(__dirname, 'index.html')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

module.exports = server

server.get('/', (req, res) => {
  res.sendFile(filePath)
})
