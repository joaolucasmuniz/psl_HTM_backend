const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/jwt');

const handleTokenVerificationError = (res, error) => {
  console.error('Erro ao verificar token:', error);

  switch (true) {
  case error instanceof jwt.JsonWebTokenError:
    return res.status(401).json({ error: 'Token inválido' });
  case error instanceof jwt.TokenExpiredError:
    return res.status(401).json({ error: 'Token expirado' });
  default:
    return res.status(401).json({ error: 'Erro desconhecido ao verificar o token' });
  }
};

const authentication = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const user = await verifyToken(authorization);
    req.user = user;
  } catch (error) {
    handleTokenVerificationError(res, error);
  }

  next();
};

module.exports = {
  authentication,
}; 