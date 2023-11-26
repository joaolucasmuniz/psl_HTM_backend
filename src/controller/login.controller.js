const { loginService } = require('../service');

const login = async (req, res, next) => {
  try {
    const { username } = req.body;
    const token = await loginService.login(username);
    
    res.status(200).json({ token });
  } catch (error) {
    console.error('Erro na função login:', error);
    next(error);
  }
};

module.exports = {
  login,
};