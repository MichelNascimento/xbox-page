const express = require('express')
const mongoose = require('mongoose')
const { user, pass } = require('../config')
const routes = require('./routes')

mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-e6zxv.mongodb.net/xbox?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)