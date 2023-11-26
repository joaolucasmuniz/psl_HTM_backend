const jwt = require('jsonwebtoken');

const JWT_SECRET = '123456';

const generateToken = async (payload) => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

const verifyToken = async (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);

  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
};