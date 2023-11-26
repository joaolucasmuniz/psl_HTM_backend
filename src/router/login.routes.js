const { Router } = require('express');

const { validateLogin } = require('../middlewares/login.middleware');

const { loginController } = require('../controller');

const loginRouter = Router();

loginRouter.post('/', validateLogin, loginController.login);

module.exports = loginRouter;
