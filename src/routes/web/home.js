const express = require('express');
const router = express.Router();

const faculty_controller = require('../../controllers/faculty.controller')

router.get('/', faculty_controller.getCourses);
// router.post('/users', template_controller.saveUser);

module.exports = router;
