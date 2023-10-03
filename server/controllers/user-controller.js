const { hashPassword, checkPassword } = require("../helpers/hash");
const { generateToken } = require("../helpers/jwt");
const { User } = require("../config/config");

class UserController {
  static async signup(req, res, next) {
    try {
      const { username, email, password } = req.body;

      const addUser = await User.add({
        username,
        email,
        password: hashPassword(password),
        profile_picture: "",
        activities: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.status(201).json({ id: addUser.id, username, email });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.where("email", "==", email).get();
      if (user.empty) {
        throw { status: 401, message: "Invalid email/password" };
      }

      const userData = user.docs[0].data();
      if (!checkPassword(password, userData.password)) {
        throw { status: 401, message: "Invalid email/password" };
      }

      userData.id = user.docs[0].id;

      const access_token = generateToken({
        id: userData.id,
        username: userData.username,
        email: userData.email,
      });

      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
