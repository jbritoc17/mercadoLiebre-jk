const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
/* const logDBMiddleware = require(); */
const {check, validationResult, body} = require('express-validator');


router.get("/ingresa", userController.logIn);
router.post("/ingresa",[
    check('user').isEmail().withMessage('Email invalido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener minimo 8 caracteres')
    
], userController.processLogin);


router.get("/registrate", userController.logUp);

module.exports = router;