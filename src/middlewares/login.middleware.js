const validateLogin = (req, res, next) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: 'Invalid fields' });
  next();
};

module.exports = {
  validateLogin,
};