const express = require('express')
const mongoose = require('mongoose')
const { user, pass } = require('../config')

mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-e6zxv.mongodb.net/xbox?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.get('/', (req, res) => {
  return res.send({ message: 'Hello World!' })
})

app.listen(3333)