const { Router } = require('express');

const { userController } = require('../controller');
const { authentication } = require('../middlewares/authication.middleware');

const userRouter = Router();
userRouter.use(authentication);
userRouter.get('/', userController.getUserById);

module.exports = userRouter;