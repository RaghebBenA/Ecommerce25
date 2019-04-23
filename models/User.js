const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserSchema = new Schema({
  UserID: String,
  User: String,
  Code: {
   type:String,
   default:"0000"
  },
  Admin: {
    type:Boolean,
    default: false
  }
});

mongoose.model("users", UserSchema);
