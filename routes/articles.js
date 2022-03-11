var express = require('express');
var router = express.Router();
const articleController = require("../controllers/articleController");

// GET /articles
router.get('/', articleController.listAllArticles);

// GET /articles/:articleName
router.get('/:articleURL', articleController.displayArticle);


module.exports = router;
