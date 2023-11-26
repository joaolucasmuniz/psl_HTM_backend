const { userModel } = require('../model');

const getAllClients = async (accessLevel) => {
  const clients = await userModel.getAllClients(accessLevel);
  return clients;
};

const getClientsById = async (id, accessLevel) => {
  const clients = await userModel.getClientsById(id, accessLevel);
  if (clients.length === 0 || !clients) {
    const error = new Error('User not found');
    error.status = 400;
    throw error;
  }
  return clients;
};

module.exports = {
  getAllClients,
  getClientsById,
};