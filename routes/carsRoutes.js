const mongoose = require("mongoose");
const Cars = mongoose.model("cars");

module.exports = (app) => {
  app.get("/api/cars", async (req, res) => {
    const cars = await Cars.find({})
    res.send(cars)
  });

  app.post("/api/cars", async (req, res, done) => {
    const cars = await new Cars({
      name: req.body.name,
      carMaker: req.body.carMaker,
      image: req.body.image,
      price: req.body.price,
      Carvin: req.body.Car
    }).save()
     done(null,cars)
  });
};
