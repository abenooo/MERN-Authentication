const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
router.get("/", (req, res) => res.send("User route"));
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Valid email address is required").isEmail(),
    check(
      "password",
      "Password must have at least 4 characters is required"
    ).isLength({ min: 4 }),
  ],
  async (req, res) => {
    const { name, email, password } = req.body;

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
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.json(req.body);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
