require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes/index.js')
const errorHandler = require('./helpers/errorHandler.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})