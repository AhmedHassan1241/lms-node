const express = require("express");
const router = express.Router();

const exam_controller = require("../../controllers/exam.controller");

router.get("/", exam_controller.getExam);
// router.post('/users', template_controller.saveUser);

module.exports = router;
