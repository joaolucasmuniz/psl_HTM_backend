const { usersService } = require('../service');

const getAllClients = async (req, res, next) => {
  try {
    const { accessLevel } = await req.user;

    const clients = await usersService.getAllClients(accessLevel);

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

    const clients = await usersService.getClientsById(id, accessLevel);

    res.status(200).json(clients);
  } catch (error) {
    console.error('Erro na função getClientsById:', error);
    next(error);
  }
};

module.exports = {
  getAllClients,
  getClientsById,
};
