const tokenController = {};

tokenController.getToken = (req, res, next) => {
  // obtains token from invite api 
  if (!req.body.username || ! req.body.password) return next({
    log: 'Error in tokenController.getToken',
    message: { err: "Username and password required"}
  });
  fetch ('https://api.invitenetworks.com/v0/tokens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'username='+req.body.username+'&password='+req.body.password
  })
  .then (res => {
    if (!res.ok || res.status !== 200) throw new Error(res.status);
    return res.json()
  })
  .then(data => {
    res.locals.token = data.access_token;
    return next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = tokenController;
