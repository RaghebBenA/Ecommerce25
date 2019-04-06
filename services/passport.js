const passport = require("passport");
const GoogleStartegy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      console.log(err);
    });
});

passport.use(
  new GoogleStartegy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecrect,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refrechToken, profile, done) => {
      const existUser = await User.findOne({ UserID: profile.id });

      if (existUser) {
        done(null, existUser);
      } else {
        const user = await new User({
          UserID: profile.id,
          User: profile.displayName
        }).save();
        done(null, user);
      }
    }
  )
);
