const axios = require('axios');
const qs = require('qs');
const tokenController = {};

tokenController.getToken = async (req, res, next) => {
  // obtains token from invite api 
  if (!req.body.username || ! req.body.password) return next({
    log: 'Error in tokenController.getToken',
    message: { err: "Username and password required"}
  });
  const dataObj = {username: req.body.username, password: req.body.password};
  
  axios.post('https://api.invitenetworks.com/v0/tokens', qs.stringify(dataObj), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
  .then (response => {
    res.locals.token = response.data.access_token;
    return next();
  })
  .catch(err => {
    next({
      log: 'Error in tokenController.getToken',
      message: { err: "Please check your username and password"}
    });
  })
}

module.exports = tokenController;
