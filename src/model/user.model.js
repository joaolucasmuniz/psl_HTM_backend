const db = require('../Database/config');

const getUserByID = async (id) => new Promise((resolve, reject) => {
  db.all('SELECT * FROM users WHERE id = ?',
    [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
});

module.exports = {
  getUserByID,
};