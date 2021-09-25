const jwt = require("jsonwebtoken");

const createJWT = (payload) => {
  const accessToken = jwt.sign({ payload }, process.env.JWT_SECRET);
};

const token = jwt.sign({});
 