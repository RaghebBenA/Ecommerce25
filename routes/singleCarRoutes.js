const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Cars = mongoose.model("cars");
const requireLogin = require("../middelware/requireLogin");
const requireAdmin  = require("../middelware/requireAdmin")

const CarRoutes = express.Router();

CarRoutes.use(bodyParser.json());

CarRoutes.route("/:carId")
  .get(async (req, res) => {
    const car = await Cars.findOne({ _id: req.params.carId });

    res.send(car);
  })
  .put(requireLogin,requireAdmin,async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.carId);
    const car = await Cars.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      { new: true }
    );
    try {
      const saved = await car.save();
      res.send(saved);
    } catch (err) {
      res.status(401).send(err);
    }
  })

  .delete(requireLogin,requireAdmin, async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.carId);
    const car = await Cars.findByIdAndDelete(id);

    res.send(car);
  });

module.exports = CarRoutes;
