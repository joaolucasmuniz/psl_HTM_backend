const { loginModel } = require('../model');
const { generateToken } = require('../utils/jwt');

const login = async (username) => {
  const user = await loginModel.login(username);
  if (!user) {
    const error = new Error('User not found');
    error.status = 400;
    throw error;
  }
  const token = await generateToken({ 
    username: user.username, id: user.id, accessLevel: user.access_level,
  });
  return token;
};

module.exports = {
  login,
};
