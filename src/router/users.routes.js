const { Router } = require('express');

const { authetication } = require('../middlewares/authication');

const { usersController } = require('../controller');

const usersRouter = Router();

usersRouter.get('/', authetication, usersController.getAllClients);

module.exports = usersRouter;