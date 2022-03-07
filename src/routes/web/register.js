const express = require("express");
const router = express.Router();
// const register_controller = require("../../controllers/register.controller");
var session = require("express-session");
var db = require("../../../models");
router.get("/", getRegister);
async function getRegister(req, res) {
  try {
    if (req.session.user && req.cookies.user_sid) {
      const getCurrentUserData = await db.csisStudent.findOne({
        where: { uid: req.session.user.uid },
      });
      const getMaterials = await db.materials.findAll({
        where: { level: getCurrentUserData.level },
      });
      // console.log(getMaterials);
      res.render("users/studentLayout/RegisterationPage.ejs", {
        currentUser: req.session.user,
        showMaterials: getMaterials,
      });
    } else {
      res.redirect("/");
    }
  } catch (error) {
    res.error(error.message, error.status);
  }
}
// router.post('/users', template_controller.saveUser);

module.exports = router;
