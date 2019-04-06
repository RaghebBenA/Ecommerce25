const express = require("express");
const cookiesSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser")
require("./models/User");
require("./models/Cars");
require("./services/passport");

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => console.log("error to connect to db", err));

const app = express();

app.use(bodyParser.json());
app.use(
  cookiesSession({
    maxAge: 30 * 40 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/carsRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
