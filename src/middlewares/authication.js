const { verifyToken } = require('../utils/jwt');

const authetication = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  const user = verifyToken(authorization);

  if (!user) {
    return res.status(401).json({ message: 'Token expirado ou inválido' });
  }

  req.user = Promise.resolve(user);

  next();
};

module.exports = {
  authetication,
}; 