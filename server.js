const express = require("express");
const app = express();
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json({extended: false}));
app.use("/api/users", require("./routes/api/users"));
app.listen(PORT, () => console.log(`server is running in the PORT 30000 ${PORT}`));

