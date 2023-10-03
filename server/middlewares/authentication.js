const { decodeToken } = require("../helpers/jwt");
const { User } = require("../config/config");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const user = decodeToken(access_token);

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
