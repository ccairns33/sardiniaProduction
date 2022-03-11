var express = require('express');
var router = express.Router();
const contactController = require("../controllers/contactController");



// GET /contact
router.get("/", contactController.displayContact);
// POST /contact
router.post("/", contactController.handleContactForm);
   

module.exports = router;
