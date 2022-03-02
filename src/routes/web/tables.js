const express = require("express");
const router = express.Router();

const tables_controller = require("../../controllers/tables.controller");

router.get("/", tables_controller.getTable);
// router.post('/users', template_controller.saveUser);

module.exports = router;
