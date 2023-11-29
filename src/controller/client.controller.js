const { clientService } = require('../service');

const getAllClients = async (req, res, next) => {
  try {
    const { accessLevel } = await req.user;

    const clients = await clientService.getAllClients(accessLevel);

    res.status(200).json(clients);
  } catch (error) {
    console.error('Erro na função getAllClients:', error);
    next(error);
  }
};

const getClientsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { accessLevel } = await req.user;

    const client = await clientService.getClientsById(id, accessLevel);

    res.status(200).json(client);
  } catch (error) {
    console.error('Erro na função getClientsById:', error);
    next(error);
  }
};

const createClient = async (req, res, next) => {
  try {
    const { accessLevel: accessLevelUser } = await req.user;
    const { name, phone, email, address, postalcode, accessLevel } = req.body;

    const client = await clientService.createClient({
      name, phone, email, address, postalcode, accessLevel,
    }, accessLevelUser);

    res.status(201).json(client);
  } catch (error) {
    console.error('Erro na função createClient:', error);
    next(error);
  }
};

const deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { accessLevel } = await req.user;

    const response = await clientService.deleteClient(id, accessLevel);

    res.status(200).json(response);
  } catch (error) {
    console.error('Erro na função deleteClient:', error);
    next(error);
  }
};

module.exports = {
  getAllClients,
  getClientsById,
  createClient,
  deleteClient,
};
