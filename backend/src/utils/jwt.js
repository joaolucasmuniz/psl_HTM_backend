const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'segredo';

const generateToken = async (payload) => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

const verifyToken = async (token) => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return reject(err);
    return resolve(decoded);
  });
});

module.exports = {
  generateToken,
  verifyToken,
};