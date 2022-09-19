const express =require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + '/../dist'));

const inviteRouter = require('./routers/inviteApi');
const userRouter = require('./routers/userApi');

app.use('/api/invite', inviteRouter);
app.use('/api/user', userRouter);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(err);
  res.status(500).json(errorObj);
});

app.listen(PORT, (err) => {
  console.log(new Date(), err || 'server listening on port '  + PORT);
});

module.exports = app;