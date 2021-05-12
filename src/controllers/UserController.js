const uuid = require('uuid')



//CRUD 

// c = create
// r = read 
// u = update 
// d = delete 




const user = []; //fake database

class UserController {



  //read
  async index(req, res) {
    res.json(user)
  }

  //read 
  async getUser(req, res) {

    const { id } = req.params

    const userUnique = await user.find(user => user.id === id)

    res.json({
      userUnique
    })

  }


  //create
  async createUser(req, res) {

    const { email, password } = req.body

    user.push({
      id: uuid.v4(), //auto increment
      email,
      password
    })

    res.json(user)

  }


  async updateUser(req, res) {

    const { id } = req.params
    const { email, password } = req.body

    const userUnique = await user.find(user => user.id === id)

    userUnique.email = email

    res.json({
      userUnique
    })

  }

  async deleteUser(req, res) {

    const { id } = req.params

    const userId = await user.find(user => user.id === id)

    const removedUser = user.filter(user => user.id !== userId.id)

    res.json(removedUser)

  }


}


module.exports = UserController



