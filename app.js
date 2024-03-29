const express = require("express");
const app = express();

const pokemonRouter = require("./routes/pokemon.route");

const db = require("./db/models/index");
db.sequelize.sync();

app.use(express.json());
app.use("/pokemon", pokemonRouter);

// default error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;
