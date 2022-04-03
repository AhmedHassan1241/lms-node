const express = require("express");
const router = express.Router();
var session = require("express-session");
var db = require("../../../models/index");
const users_controller = require('../../controllers/users.controller.js')

router.get("/", users_controller.getUsers);
router.get("/create", users_controller.createUser)
router.post("/save", users_controller.saveUser)
module.exports = router;
