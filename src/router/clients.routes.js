const { Router } = require('express');

const { authentication } = require('../middlewares/authication.middleware');
const { validadeEmail, validateUser } = require('../middlewares/Clients.middleware');

const { usersController } = require('../controller');

const clientRouter = Router();

clientRouter.use(authentication);

clientRouter.get('/', usersController.getAllClients);

clientRouter.get('/:id', usersController.getClientsById);

clientRouter.post('/', validateUser, validadeEmail, usersController.createClient);

clientRouter.delete('/:id', usersController.deleteClient);

module.exports = clientRouter;