const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
const files = require('./controllers/files')

app.use(cors())

app.get('/files/data', files.data)

if (process.env.NODE_ENV === 'test') {
  module.exports = app
} else {
  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
  })
}
