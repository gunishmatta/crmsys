const express = require("express");
const router = express.Router();
const insertUser = require("../models/user.model");
const { hashPassword } = require("../helpers/bcrypt.helper");

router.all("/", (req, res, next) => {
  next();
});

router.post("/", async (req, res) => {
  const { name, company, address, phone, email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const newUserObj = {
      name,
      company,
      address,
      phone,
      email,
      password: hashedPassword,
    };

    const result = await insertUser(req.body);
    res.json({
      message: "New user created",
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: error.message });
  }
});

module.exports = router;
