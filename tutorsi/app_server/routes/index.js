var express = require('express');
var router = express.Router();

// import controller
const mainController = require("../controllers/mainController");

//route
// router.get("/", mainController.use);

// router.get("/", mainController.index);
router.get("/home", mainController.index);



module.exports = router;
