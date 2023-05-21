const express = require("express");

const app = express();
const PORT = 5001;

app.use(express.json());

let userRoutes = require("./app/routes");

app.use("/users", userRoutes)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))