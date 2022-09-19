const express = require('express');
const deviceController = require('../controllers/deviceController');
const router = express.Router();

router.get('/getDevices', 
  deviceController.getDevices,
  (req, res) => {
    return res.status(200).json(res.locals.devices);
});

router.get('/getDeviceInterfaces/:interfaceId', 
  deviceController.getInterfaces,
  (req, res) => {
    return res.status(200).json(res.locals.interface);
});

module.exports = router;
