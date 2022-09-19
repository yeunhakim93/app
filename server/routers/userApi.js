const express = require('express');
const tokenController = require('../controllers/tokenController');
const router = express.Router();

router.post('/login', 
  tokenController.getToken,
  (req, res) => {
    return res.status(200).json({loggedIn: true, token: res.locals.token});
});

module.exports = router;
