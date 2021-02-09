const User = require('../models/User')
const jwt = require('../auth/jwt')

module.exports = {
  async createUser(request, response) {
    try {
      const { name, email, password } = request.body

      let user = await User.findOne({ email })

      if (!user) {
        user = await User.create({
          name,
          email,
          password
        })

        const token = jwt.sign({ user: user._id })

        return response.json({ user, token })
      }
      else {
        return response.send({ message: 'User already exists!' })
      }
    } catch (error) {
      response.send(error)
    }
  },

  async sign(request, response) {
    //pegando o basic auth e separando o hashtype (Basic) do hash (código).
    const [hashtype, hash] = request.headers.authorization.split(' ')
    // descriptografando o hash e cortando ele no ":" para pegar o email e password.
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':')

    try {
      let user = await User.findOne({ email, password })

      if (user) {
        const token = jwt.sign({ user: user._id })

        return response.send({ user, token })
      }

    } catch (error) {
      return response.send(error)
    }
  },

  async authMiddleWare(request, response, next) {
    const [hastype, token] = request.headers.authorization.split(' ')

    try {
      const payload = await jwt.verify(token)
      const user = await User.findById(payload.user)

      if (!user) {
        return response.send(401)
      }

      next()
    } catch (error) {
      return response.send(error)
    }
  },

  // rota para teste que só pode ser acessada com o usuário logado. Será apagada futuramente.
  async users(request, response) {
    try {
      const users = await User.find()
      return response.send(users)

    } catch (error) {
      return response.send(error)
    }
  }
}