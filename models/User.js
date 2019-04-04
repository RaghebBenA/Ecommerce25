const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserSchema = new Schema({
  UserID: String,
  User: String
});

mongoose.model("users", UserSchema);
