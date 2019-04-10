const mongoose = require("mongoose");
const Cars = mongoose.model("cars");


module.exports = (app) => {
  app.get("/api/cars", async (req, res) => {
    const cars = await Cars.find({});
    res.send(cars);
  });

  app.post("/api/cars", async (req, res, done) => {
    const { name, carMaker, image, price, Carvin } = req.body;
    const cars = await new Cars({
      name,
      carMaker,
      image,
      price,
      Carvin
    }).save();
    done(null, cars);
  });
}
