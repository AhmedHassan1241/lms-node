const sharp = require("sharp");
const fs = require("fs");
const models = require("../../models/index");
const bcrypt = require("bcrypt")

const methods = {
  async getUsers() {
    const users = await models.User.findAll();
    // var highGPA = users.filter(user => {
    //     return user.gpa >
    // })
    console.log(users);
    return users;
  },
  async saveUser(req, res) {
    let user_data = {
      email: req.body.email,
      password:  bcrypt.hashSync(req.body.password, 10)
    }
    const user = await models.users.create(user_data);
    return user;
  },
};

module.exports = { ...methods };
