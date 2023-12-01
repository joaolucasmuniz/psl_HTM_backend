const { Router } = require('express');

const { authentication } = require('../middlewares/authication.middleware');
const { validadeEmail, validateUser } = require('../middlewares/Clients.middleware');

const { clientsController } = require('../controller');

const clientRouter = Router();

clientRouter.use(authentication);

clientRouter.get('/', clientsController.getAllClients);

clientRouter.get('/:id', clientsController.getClientsById);

clientRouter.post('/', validateUser, validadeEmail, clientsController.createClient);

clientRouter.delete('/:id', clientsController.deleteClient);

clientRouter.put('/:id', validateUser, validadeEmail, clientsController.updateClient);

module.exports = clientRouter;