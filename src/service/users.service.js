const { userModel } = require('../model');

const getAllClients = async (accessLevel) => {
  const clients = await userModel.getAllClients(accessLevel);
  return clients;
};

const getClientsById = async (id, accessLevel) => {
  const clients = await userModel.getClientsById(id, accessLevel);
  if (clients.length === 0 || !clients) {
    const error = new Error('Cliente não encontrado');
    error.status = 400;
    throw error;
  }
  return clients;
};

const createClient = async (values, accessLevelUser) => {
  const { accessLevel } = values;
  if (accessLevel > accessLevelUser) {
    const error = new Error('Usuário não autorizado');
    error.status = 401;
    throw error;
  }
  const clients = await userModel.createClient(values);
  return clients;
};

const deleteClient = async (id, accessLevelUser) => {
  const clients = await userModel.deleteClient(id, accessLevelUser);
  return clients;
};

module.exports = {
  getAllClients,
  getClientsById,
  createClient,
  deleteClient,
};