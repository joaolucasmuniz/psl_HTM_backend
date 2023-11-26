const { userModel } = require('../model');

const getAllClients = async (accessLevel) => {
  const clients = await userModel.getAllClients(accessLevel);
  return clients;
};

module.exports = {
  getAllClients,
};