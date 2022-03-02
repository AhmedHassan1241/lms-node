require('dotenv').config();

const methods = {
  async getRegister(req, res) {
    try {
      res.render("users/studentLayout/RegisterationPage.ejs", {
        courses: [],
      });
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods }