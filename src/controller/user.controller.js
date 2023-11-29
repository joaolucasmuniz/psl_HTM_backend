const { userService } = require('../service');

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await userService.getUserById(id);

    res.status(200).json(user);
  } catch (error) {
    console.error('Erro na função getUserById:', error);
    next(error);
  }
};

module.exports = {
  getUserById,
};