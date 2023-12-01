const db = require('../Database/config');

const getAllClients = async (accessLevel) => new Promise((resolve, reject) => {
  db.all('SELECT id, name FROM clients WHERE access_level <= ?',
    [accessLevel], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
});

const getClientsById = async (id, accessLevel) => new Promise((resolve, reject) => {
  db.all('SELECT * FROM clients WHERE id = ? AND access_level <= ?',
    [id, accessLevel], (err, row) => {
      if (err) {
        reject(err);
      } else {
        console.log(row);
        resolve(row);
      }
    });
});

const createClient = async (values) => new Promise((resolve, reject) => {
  const { name, phone, email, address, postalcode, accessLevel } = values;
  db.run(`INSERT INTO clients (name, phone, email, address, postalcode, access_level)
  VALUES (?, ?, ?, ?, ?, ?)`,
  [name, phone, email, address, postalcode, accessLevel], function (err) {
    if (err) {
      reject(err);
    } else if (this.changes === 0) {
      const createError = new Error('Não foi possível cadastrar o cliente');
      createError.status = 400;
      reject(createError);
    } else {
      resolve({ message: 'Cliente cadastrado com sucesso!' });
    }
  });
});

const deleteClient = async (id, accessLevelUser) => new Promise((resolve, reject) => {
  db.run('DELETE FROM clients WHERE id = ? AND access_level <= ?',
    [id, accessLevelUser], function (err) {
      if (err) {
        reject(err);
      } else if (this.changes === 0) {
        const notFoundError = new Error('Cliente não encontrado / não autorizado');
        notFoundError.status = 404;
        reject(notFoundError);
      } else {
        resolve({ message: 'Cliente deletado com sucesso!' });
      }
    });
});

const updateClient = async (id, values) => new Promise((resolve, reject) => {
  const { name, phone, email, address, postalcode, accessLevel } = values;
  db.run(`UPDATE clients SET name = ?, phone = ?, email = ?,
  address = ?, postalcode = ?, access_level = ? WHERE id = ?`,
  [name, phone, email, address, postalcode, accessLevel, id], function (err) {
    if (err) {
      reject(err);
    } else if (this.changes === 0) {
      const notFoundError = new Error('Cliente não encontrado / não autorizado');
      notFoundError.status = 404;
      reject(notFoundError);
    } else {
      resolve({ message: 'Cliente atualizado com sucesso!' });
    }
  });
});

module.exports = {
  getAllClients,
  getClientsById,
  createClient,
  deleteClient,
  updateClient,
};
