const db = require('../Database/config');

const login = async (username) => new Promise((resolve, reject) => {
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (err) {
      reject(err);
    } else {
      resolve(row);
    }
  });
});
module.exports = {
  login,
};