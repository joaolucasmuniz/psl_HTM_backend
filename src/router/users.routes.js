const { Router } = require('express');

const { authentication } = require('../middlewares/authication');

const { usersController } = require('../controller');

const usersRouter = Router();

usersRouter.get('/', authentication, usersController.getAllClients);

usersRouter.get('/:id', authentication, usersController.getClientsById);

usersRouter.post('/', authentication, usersController.createClient);

usersRouter.delete('/:id', authentication, usersController.deleteClient);

module.exports = usersRouter;