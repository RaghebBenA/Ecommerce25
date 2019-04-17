const mongoose = require("mongoose");
const Cars = mongoose.model("cars");
const requireLogin = require("../middelware/requireLogin");


module.exports = (app) => {
  app.get("/api/cars", async (req, res) => {
    const cars = await Cars.find({});
    res.send(cars);
  });

  app.post("/api/cars", requireLogin,async (req, res, done) => {
    const { name, carMaker, image, price, Carvin } = req.body;
    const cars = await new Cars({
      name,
      carMaker,
      image,
      price,
      Carvin
    }).save();
    res.send(cars)
    done(null, cars);
  });
}
