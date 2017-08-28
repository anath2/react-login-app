const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()

// MIDDLEWARE
app.use(morgan('tiny'))
app.use(express.static(path.resolve(__dirname, '..', 'build')))

// ROUTES - ALWAYS POINT TO THE INDEX FILE
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

module.exports = app
