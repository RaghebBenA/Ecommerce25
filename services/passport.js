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
    (accessToken, refrechToken, profile, done) => {
      User.findOne({ UserID: profile.id })
        .then((existUser) => {
          if (existUser) {
            done(null, existUser);
          } else {
            new User({ UserID: profile.id, User: profile.displayName })
              .save()
              .then((user) => done(null, user));
          }
        })
        .catch((err) => console.log(err));
    }
  )
);


