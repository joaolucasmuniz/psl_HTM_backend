const express = require('express');
const { loginRouter, clientRouter } = require('./router');

const app = express();

app.use(express.json());

app.listen(3001, () => {
  console.log('Online');
});
app.get('/', (_request, response) => {
  response.status(200).send({ mensagem: 'Online' });
});

app.use('/login', loginRouter);

app.use('/clients', clientRouter);

app.use((err, _req, res, _next) => {
  if (!err.status) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  } else {
    res.status(err.status).json({ error: err.message });
    console.log(err); 
  }
});

module.exports = app;