

const user = [];


class UserController {


  async index(req, res) {
    res.json(user)
  }

  async createUser(req, res) {

    const { email, password } = req.body

    user.push({
      email,
      password
    })

    res.json(user)

  }

}


module.exports = UserController



