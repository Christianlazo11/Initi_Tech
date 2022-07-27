const { Sequelize } = require("sequelize");
const setupModels = require("./../db/models");

const sequelize = new Sequelize(
  process.env.NAME_BD,
  process.env.USER_BD,
  process.env.PASWORD_BD,
  {
    host: process.env.HOST_NAME_MYSQL,
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: false,
    },
  }
);
setupModels(sequelize);
// sequelize.sync();
module.exports = sequelize;
