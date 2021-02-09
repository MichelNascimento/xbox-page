const { Router } = require('express')
const UserController = require('./controllers/UserController')

const routes = Router()

routes.post('/user', UserController.createUser)

routes.get('/sign', UserController.sign)

routes.get('/users', UserController.authMiddleWare, UserController.users)

module.exports = routes