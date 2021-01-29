const { Router } = require('express')
const UserController = require('./controllers/UserController')

const routes = Router()

routes.post('/user', UserController.createUser)

module.exports = routes