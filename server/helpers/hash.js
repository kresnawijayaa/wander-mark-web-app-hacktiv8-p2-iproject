const bcrypt = require("bcryptjs");
const { log } = require("console");

function hashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

function checkPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports = { hashPassword, checkPassword };
