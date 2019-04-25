const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Key = require("../config/keys");
const requireLogin = require("../middelware/requireLogin");

const AdminRoutes = express.Router();

AdminRoutes.use(bodyParser.json());

AdminRoutes.route("/:userId")
  .get(async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    res.send(user);
  })
  .put(async (req, res) => {
    const { Code } = req.body;
    const reqCode = Object.values(req.body).toString();
    if (reqCode === Key.adminKey) {
      const user = await User.findByIdAndUpdate(
        {
          _id: req.params.userId
        },
        {
          $set: { Admin: true, Code: Code }
        },
        {
          new: true
        }
      );
      try {
        const saved = await user.save();
        res.send(saved);
      } catch (err) {
        res.status(401).send(err);
      }
    } else {
      const user = await User.findByIdAndUpdate(
        {
          _id: req.params.userId
        },
        {
          $set: req.body
        },
        {
          new: true
        }
      );
      try {
        const saved = await user.save();
        res.send(saved);
      } catch (err) {
        res.status(401).send(err);
      }
    }
  });

module.exports = AdminRoutes;
