require("dotenv").config();

const methods = {
  async getLogin(req, res) {
    try {
      res.render("Login/login.ejs", { courses: [] });
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
