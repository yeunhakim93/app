const axios = require('axios');
const deviceController = {};
require('dotenv').config();


deviceController.getDevices = (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) return next({
    log: 'Error in deviceController.getDevices',
    message: { err: "Token is required"}
  });

  axios.get(`https://api.invitenetworks.com/v0/${process.env.ORG_ID}/devices/`, {
    headers: {
      Authorization:"Bearer " + token,
      accept: 'application/json'
    }
  })
  .then (response => {
    res.locals.devices = response.data;
    return next();
  })
  .catch(err => {
    next({
      log: 'Error in deviceController.getDevices',
      message: { err: "Devices were not obtained"}
    });
  })
}

deviceController.getInterfaces = (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) return next({
    log: 'Error in deviceController.getDevices',
    message: { err: "Token is required"}
  });
  axios.get(`https://api.invitenetworks.com/v0/${process.env.ORG_ID}/interfaces/${req.params.interfaceId}`, {
    headers: {
      Authorization:"Bearer " + token,
      accept: 'application/json'
    }
  })
  .then (response => {
    res.locals.interface = response.data;
    return next();
  })
  .catch(err => {
    next({
      log: 'Error in deviceController.getInterfaces',
      message: { err: "Interfaces were not obtained"}
    });
  })
}
module.exports = deviceController;
