require("dotenv").config();

const methods = {
  async getTable(req, res) {
    try {
      res.render("users/studentLayout/TablePage.ejs", { courses: [] });
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
