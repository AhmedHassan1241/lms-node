const sharp = require("sharp");
const fs = require("fs");
const models = require("../../models/index");

const methods = {
  async getUsers() {
    const users = await models.User.findAll();
    // var highGPA = users.filter(user => {
    //     return user.gpa >
    // })
    console.log(users);
    return users;
  },
};

module.exports = { ...methods };
