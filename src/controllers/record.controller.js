require("dotenv").config();

const methods = {
  async getRecord(req, res) {
    try {
      res.render("users/studentLayout/AcadmicRecords.ejs", { courses: [] });
    } catch (error) {
      res.error(error.message, error.status);
    }
  },
};

module.exports = { ...methods };
