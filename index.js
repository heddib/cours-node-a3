const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes/index");
const sequelize = require('./database')

sequelize
  .authenticate()
  .then(() => {
    console.log("Connecté à la base de données");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan("dev"));

    app.use(router);

    sequelize.sync()

    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
