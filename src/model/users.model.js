const db = require('../Database/config');

const getAllClients = async (accessLevel) => new Promise((resolve, reject) => {
  db.all('SELECT id, name, phone, access_level FROM clients WHERE access_level <= ?',
    [accessLevel], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
});

module.exports = {
  getAllClients,
};
