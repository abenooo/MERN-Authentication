const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

// adding checker
const { check, validationResult } = require("express-validator");
router.get("/", (req, res) => res.send("User route"));
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "valid email address is required").isEmail(),
    check("password", "Password must have atlease 4 characters").isLength({
      min: 4,
    }),
  ],
  async (req, res) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      // create the new user if there is no user with that email
      user = new User({
        name,
        email,
        password,
      });

      // encrypt the password and return the value
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(password, salt);
      // save the user
      await user.save();
      // return the resposen
      res.json(req.body);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
