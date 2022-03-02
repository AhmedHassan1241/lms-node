require("dotenv").config();

const methods = {
  async getExam(req, res) {
    try {
      res.render("users/studentLayout/ExamPage.ejs", { courses: [] });
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
