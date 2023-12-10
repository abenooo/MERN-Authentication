const express = require("express");
const app = express();
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3000;
connectDB();
app.get("/", (request, response) => response.send("Hello coder"));
app.listen(PORT, () => console.log(`server is running in the PORT 30000 ${PORT}`));

