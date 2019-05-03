const express = require("express");
const cookiesSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User");
require("./models/Cars");
require("./models/Purchase");
require("./services/passport");

const CarRoutes = require("./routes/singleCarRoutes");
const AdminRoutes = require("./routes/adminRoutes");


mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => console.log("error to connect to db", err));

const app = express();
const router = express.Router();
router.use(bodyParser.json());
app.use(bodyParser.json());
app.use(
  cookiesSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/api/cars", CarRoutes);
app.use("/api/user", AdminRoutes);


require("./routes/authRoutes")(app);
require("./routes/carsRoutes")(app);
require("./routes/purchaseRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT);
