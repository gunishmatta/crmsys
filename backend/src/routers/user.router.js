const express = require("express");
const router = express.Router();
const { insertUser, getUserByEmail } = require("../models/user.model");
const { hashPassword, comparePassword } = require("../helpers/bcrypt.helper");

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //get user using email

  if (!email || !password) {
    return res.json({
      status: "error",
      message: "Invalid Form Submission",
    });
  }

  const user = await getUserByEmail(email);

  if (!passwordFromDB) {
    return res.json({
      status: "error",
      message: "User Not Found",
    });
  }

  const passwordFromDB = user && user._id ? user.password : null;

  const result = await comparePassword(password, passwordFromDB);

  res.json({ status: "sucess", message: "Logged In Successfully" });
});

module.exports = router;
