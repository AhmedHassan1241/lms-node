const express = require("express");
const router = express.Router();

const record_controller = require("../../controllers/record.controller");

router.get("/", record_controller.getRecord);
// router.post('/users', template_controller.saveUser);

module.exports = router;
