const { verifyToken } = require('../utils/jwt');

const authetication = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const user = verifyToken(authorization);

  if (!user) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.user = Promise.resolve(user);

  next();
};

module.exports = {
  authetication,
}; 