const express = require("express");
const app = express();
const dbConfig = require("./db");

const userRoutes = require("./Routes/userRoutes");

app.use(express.json());
app.use("/api/User", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node server running on port ${port}`));
