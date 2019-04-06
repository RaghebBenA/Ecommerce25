const mogoose = require("mongoose");
const { Schema } = mogoose;

const CarSchema = new Schema({
  name: String,
  carMaker: String,
  image: String,
  price: String,
  Carvin: String
});

mogoose.model("cars", CarSchema);
