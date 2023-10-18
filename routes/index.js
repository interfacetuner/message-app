const express = require('express');
const router = express.Router();

// Render the index page
router.get('/', function (req, res) {
  res.render('index');
});

module.exports = router;
