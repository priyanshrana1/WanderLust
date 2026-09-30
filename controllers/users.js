const User = require("../models/user");

// ================= SIGNUP FORM =================

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};


// ================= SIGNUP =================

module.exports.signup = (req, res, next) => {

  let { username, email, password } = req.body;

  const newUser = new User({
    email,
    username
  });

  User.register(newUser, password, (err, registeredUser) => {

    if (err) {
      console.log("REGISTER ERROR:", err);
      req.flash("error", err.message);
      return res.redirect("/signup");
    }

    req.login(registeredUser, (err) => {

      if (err) {
        return next(err);
      }

      req.flash("success", "Welcome to WanderLust!");

      res.redirect("/listings");
    });
  });
};


// ================= LOGIN FORM =================

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};


// ================= LOGIN =================

module.exports.login = async (req, res) => {

  req.flash("success", "Welcome back to WanderLust!");

  let redirectUrl = res.locals.redirectUrl || "/listings";

  res.redirect(redirectUrl);
};


// ================= LOGOUT =================

module.exports.logout = (req, res, next) => {

  req.logout((err) => {

    if (err) {
      return next(err);
    }

    req.flash("success", "You are logged out");

    res.redirect("/listings");
  });
};