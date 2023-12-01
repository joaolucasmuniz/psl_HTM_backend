const isValidField = (value) => !!value;

const validateUser = (req, res, next) => {
  const { name, phone, email, address, postalcode, accessLevel } = req.body;

  const isValidData = [
    isValidField(name),
    isValidField(phone),
    isValidField(email),
    isValidField(address),
    isValidField(postalcode),
    isValidField(accessLevel),
  ].every(Boolean);

  if (!isValidData) {
    return res.status(400).json({ mensagem: 'Dados inválidos' });
  }

  next();
};

const validadeEmail = (req, res, next) => {
  const { email } = req.body;

  const regexEmail = /\S+@\S+\.\S+/;

  if (!regexEmail.test(email)) {
    return res.status(400).json({ mensagem: 'Email inválido' });
  }

  next();
};

module.exports = {
  validateUser,
  validadeEmail,
};