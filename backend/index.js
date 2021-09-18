require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./src/utils/errorHandler");

const port = 8081;

// app.use(helmet());
app.use(cors());
app.use(express.json());

//MongoDB Setup
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

if (process.env.NODE_ENV !== "production") {
  const connection = mongoose.connection;
  connection.on("open", () => {
    console.log("Mongo DB Connected");
  });
  connection.on("error", (error) => {
    console.log(error);
  });
  app.use(morgan("tiny"));
}

//import router
const userRouter = require("./src/routers/user.router");
const ticketRouter = require("./src/routers/ticket.router");

//use router

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello",
  });
});

app.use("/v1/user", userRouter);
app.use("/v1/ticket", ticketRouter);

app.use((req, res, next) => {
  const error = new Error("Resources Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  errorHandler(err, res);
});

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port}`);
});
