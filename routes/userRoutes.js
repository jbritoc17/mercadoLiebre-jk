const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();


router.get("/ingresa", userController.logIn);
router.get("/registrate", userController.logUp);

module.exports = router;