require("dotenv").config();
var session = require("express-session");
var users = require("../../models/");
const methods = {
  async getHome(req, res) {
    try {
      res.render("index.ejs", { currentUser: req.user });
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
