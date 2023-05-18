const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/ingresa", userController.logIn);
router.get("/registrate", userController.logUp);

module.exports = router;