const express = require("express");
const app = express();
const dbConfig = require('./db');



app.use(express.json())


const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Node server running on port ${port}`));