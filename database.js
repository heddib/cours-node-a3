const { Sequelize } = require("sequelize");
const config = require("./config");

const modelDefiners = [require("./models/user.model")];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
  }
);

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;
