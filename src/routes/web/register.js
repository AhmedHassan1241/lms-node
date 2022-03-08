const express = require("express");
const router = express.Router();
var session = require("express-session");
var db = require("../../../models");
// new
// const register_controller = require('../../controllers/register.controller')
router.get("/", getRegister);
router.post("/", postRegister);
async function getRegister(req, res) {
  try {
    if (req.session.user && req.cookies.user_sid) {
      var getCurrentUserData = await db.csisStudent.findOne({
        where: { uid: req.session.user.uid },
      });
      var getMatrials = await db.materials.findAll({
        where: { level: getCurrentUserData.level },
      }); /////////////////////////and semester///////////////////////////
      //new
      const checkRegistration = await db.registration.findOne({
        where: { uid: req.session.user.uid },
      });
      if (checkRegistration) {
        var showCoursesRegistered = checkRegistration.courses;
        var coursesRegistered = showCoursesRegistered.split(",");
        // coursesRegistered.map(function (course) {
        //     console.log(course === 'English1'? 'yes' : 'no');
        // })
      }
      // console.log(coursesRegistered)
      //new
      res.render("users/studentLayout/RegisterationPage.ejs", {
        currentUser: req.session.user,
        showMaterials: getMatrials,
        checkR: checkRegistration,
        checked: coursesRegistered,
      });
    } else {
      res.redirect("/");
    }
  } catch (error) {
    res.error(error.message, error.status);
  }
}
// router.post('/users', template_controller.saveUser);
async function postRegister(req, res) {
  //new
  try {
    if (req.session.user && req.cookies.user_sid) {
      const checkRegistration = await db.registration.findOne({
        where: { uid: req.session.user.uid },
      });
      if (checkRegistration) {
        res.redirect("/registeration");
      } else {
        //register_controller
        var a0 = req.body.m0;
        var a1 = req.body.m1;
        var a2 = req.body.m2;
        var a3 = req.body.m3;
        var a4 = req.body.m4;
        var a5 = req.body.m5;

        var dataRegister =
          a0 + "," + a1 + "," + a2 + "," + a3 + "," + a4 + "," + a5;
        var handelData = dataRegister.replace(/undefined/g, "");

          if (a0 || a1 || a2 || a3 || a4 || a5) {
              await db.registration.create({ uid: req.session.user.uid, courses: handelData }).then(function (data) {
              res.send("Added successfully");
            });
        }
      }
    } else {
      res.redirect("/");
    }
  } catch (error) {
    res.error(error.message, error.status);
  }
}
module.exports = router;
