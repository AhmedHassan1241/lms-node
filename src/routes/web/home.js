const express = require('express');
const router = express.Router();

const authenticate = require('../middlewares/auth.js');

const home_controller = require('../../controllers/home.controller')


router.get('/', authenticate, home_controller.getHome);
// router.post('/users', template_controller.saveUser);

module.exports = router;
