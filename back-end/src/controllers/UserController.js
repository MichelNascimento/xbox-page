const User = require('../models/User')

module.exports = {
  async createUser(request, response) {
    const { name, email, password } = request.body

    let user = await User.findOne({email})

    if (!user) {
      user = await User.create({
        name,
        email,
        password
      })

      return response.json(user)
    }
    else {
      return response.send({ message: 'User already exist!' })
    }
  }
}