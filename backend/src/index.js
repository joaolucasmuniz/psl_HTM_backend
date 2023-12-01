const express = require('express');
const cors = require('cors');
const { loginRouter, clientRouter, userRouter } = require('./router');

const PORT = process.env.PORT || 3001;

const app = express();

app.options('*', cors());

app.use(express.json());

app.use(cors(
  { 
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
  },
));

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});
app.get('/', (_request, response) => {
  response.status(200).send({ mensagem: 'Online' });
});

app.use('/login', loginRouter);

app.use('/clients', clientRouter);

app.use('/user', userRouter);

app.use((err, _req, res, _next) => {
  if (!err.status) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  } else {
    res.status(err.status).json({ error: err.message });
    console.log(err); 
  }
});

module.exports = app;