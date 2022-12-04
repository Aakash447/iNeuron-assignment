const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  let { firstName, lastName, email, password } = req.body;
  let errors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  if (!firstName) {
    errors.firstName = "first name is required";
  }
  if (!lastName) {
    errors.lastName = "last name is required";
  }
  if (!email) {
    errors.email = "email is required";
  } else if (email.length <= 10) {
    errors.email = "enter a valid email";
  }
  if (!password) {
    errors.password = "password is required";
  } else if (password.length < 8) {
    errors.password = "password must be minimum 8 character long";
  }
  if (errors.firstName || errors.lastName || errors.email || errors.password) {
    return res.status(400).json({
      error: errors,
    });
  }
  bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
    if (err) {
      res.json({
        error: err,
      });
    }

    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });

    user
      .save()
      .then((user) => {
        res.json({
          message: "User Added Successfully !",
        });
      })
      .catch((error) => {
        res.json({
          message: "A error accured",
        });
      });
  });
};

const login = (req, res, next) => {
  let { email, password } = req.body;
  let errors = {
    email: "",
    password: "",
  };
  if (!email) {
    errors.email = "email is required";
  } else if (email.length <= 10) {
    errors.email = "enter a valid email";
  }
  if (!password) {
    errors.password = "password is required";
  } else if (password.length < 8) {
    errors.password = "password must be minimum 8 character long";
  }
  if (errors.email || errors.password) {
    return res.status(400).json({
      error: errors,
    });
  }

  User.findOne({ email: email }).then((document) => {
    if (document) {
      bcrypt.compare(password, document.password, (err, result) => {
        if (err) {
          res.status(404).json({
            err,
          });
        }
        if (result) {
          let token = jwt.sign(
            { firstName: document.firstName },
            "amsbdf437y21$cvn",
            { expiresIn: "1h" }
          );
          res.json({
            message: "Login successful",
            token,
          });
        } else {
          return res.status(400).json({
            message: "Password does not match",
          });
        }
      });
    } else {
      return res.status(404).json({
        message: "No user found",
      });
    }
  });
};

const allUsers = (req, res) => {
  User.find().then((docs) => {
    if (docs) {
      return res.status(200).json({ users: docs });
    } else {
      return res.status(404).json({
        message: "No users found",
      });
    }
  });
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.userID)
    .then((doc) => {
      if (!doc) {
        return res.status(404).json({
          message: "Not found",
        });
      } else {
        return res.status(200).json({
          message: "User Deleted",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = {
  register,
  login,
  allUsers,
  deleteUser,
};
