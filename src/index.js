const express = require('express');
const { loginRouter, usersRouter } = require('./router');

const app = express();

app.use(express.json());

app.listen(3001, () => {
  console.log('Online');
});
app.get('/', (_request, response) => {
  response.status(200).send({ mensagem: 'Online' });
});

app.use('/login', loginRouter);

app.use('/users', usersRouter);

app.use((err, _req, res, _next) => {
  if (!err.status) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(err.status).json({ error: err.message });
  }
});

module.exports = app;