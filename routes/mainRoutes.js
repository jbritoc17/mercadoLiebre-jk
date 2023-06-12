const express = require("express");
const multer= require('multer');

const mainController = require("../controllers/mainController");
/* const productsControllers = require("../controllers/productsControllers"); */


const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/imgs/products');
    },
    filename: (req, file, cb) => {
        console.log(path.extname(file.originalname))
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.get("/", mainController.index);


module.exports = router;
