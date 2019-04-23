const Key = require("../config/keys")

module.exports = (req, res, next) => {
    if (req.user.Admin === true) {
      return res.status(401).send({ error: "You Are not Admin" });
    }
    next();
  };