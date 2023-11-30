const { clientModel } = require('../model');

const getAllClients = async (accessLevel) => {
  const clients = await clientModel.getAllClients(accessLevel);
  return clients;
};

const getClientsById = async (id, accessLevel) => {
  const client = await clientModel.getClientsById(id, accessLevel);
  if (client.length === 0 || !client) {
    const error = new Error('cliente não encontrado / não autorizado');
    error.status = 400;
    throw error;
  }
  return client;
};

const createClient = async (values, accessLevelUser) => {
  const { accessLevel } = values;
  if (accessLevel > accessLevelUser) {
    const error = new Error('Usuário não autorizado');
    error.status = 401;
    throw error;
  }
  const client = await clientModel.createClient(values);
  return client;
};

const deleteClient = async (id, accessLevelUser) => {
  const client = await clientModel.deleteClient(id, accessLevelUser);
  return client;
};

const updateClient = async (id, values, accessLevelUser) => {
  const { accessLevel } = values;
  if (accessLevel > accessLevelUser) {
    const error = new Error('Usuário não autorizado');
    error.status = 401;
    throw error;
  }
  const client = await clientModel.updateClient(id, values);
  return client;
};

module.exports = {
  getAllClients,
  getClientsById,
  createClient,
  deleteClient,
  updateClient,
};