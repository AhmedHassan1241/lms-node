const express = require("express");
const router = express.Router();

//const record_controller = require("../../controllers/record.controller");

router.get("/", getRecord);
// router.post('/users', template_controller.saveUser);
async function getRecord(req, res) {
    try {
        res.render("users/studentLayout/AcadmicRecords.ejs", {
            currentUser: req.session.user,
        });
    } catch (error) {
        res.error(error.message, error.status);
    }
}
module.exports = router;
