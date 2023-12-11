const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;

connectDB();

// initalize middelweare
app.use(express.json({ extended: false }));

app.use("/api/users", require('./routes/api/users'));
// app.get("/", (request, response) => response.send("Hello coder"));
app.listen(PORT, () =>
  console.log(`server is running in the PORT  ${PORT}`)
);
