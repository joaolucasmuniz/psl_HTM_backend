const { userModel } = require('../model');

const getUserById = async (id) => {
  const user = await userModel.getUserByID(id);
  return user;
};

module.exports = {
  getUserById,
};