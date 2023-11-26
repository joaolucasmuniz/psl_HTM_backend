const validateLogin = (req, res, next) => {
  const { username } = req.body;
  if (!username || username === '') {
    return res.status(400).json({ message: 'O campo "username" é obrigatório' }); 
  }
  next();
};

module.exports = {
  validateLogin,
};