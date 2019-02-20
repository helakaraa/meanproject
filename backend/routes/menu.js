const express = require("express");

const router = express.Router();
const MenuController = require("../controllers/menu");

router.get("", MenuController.getMenu);
module.exports = router;
