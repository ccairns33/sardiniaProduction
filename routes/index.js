var express = require('express');
var router = express.Router();
const indexCobtroller = require("../controllers/indexController");

router.get("/", indexCobtroller.listHomePageArticles);
router.get("/gallery", indexCobtroller.displayGallery);
router.get("/about", indexCobtroller.displayAbout);
router.get("/donate", indexCobtroller.displayDonate);


module.exports = router;
