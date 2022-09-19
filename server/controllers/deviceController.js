const deviceController = {};
require('dotenv').config();


deviceController.getDevices = (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) return next({
    log: 'Error in deviceController.getDevices',
    message: { err: "Token is required"}
  });

  fetch (`https://api.invitenetworks.com/v0/${process.env.ORG_ID}/devices/`, {
    headers: {
      Authorization:"Bearer " + token,
      accept: 'application/json'
    }
  })
  .then (res => {
    if (!res.ok || res.status !== 200) throw new Error(res.status);
    return res.json()
  })
  .then(data => {
    res.locals.devices = data;
    return next();
  })
  .catch(err => {
    next(err);
  })
}

deviceController.getInterfaces = (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) return next({
    log: 'Error in deviceController.getDevices',
    message: { err: "Token is required"}
  });
  fetch (`https://api.invitenetworks.com/v0/${process.env.ORG_ID}/interfaces/${req.params.interfaceId}`, {
    headers: {
      Authorization:"Bearer " + token,
      accept: 'application/json'
    }
  })
  .then (res => {
    if (!res.ok || res.status !== 200) throw new Error(res.status);
    return res.json();
  })
  .then(data => {
    res.locals.interface = data;
    return next();
  })
  .catch(err => {
    next(err);
  })
}
module.exports = deviceController;
