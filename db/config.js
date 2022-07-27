require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USER_BD,
    password: process.env.PASWORD_BD,
    database: process.env.NAME_BD,
    host: process.env.HOST_NAME_MYSQL,
    dialect: "mysql",
    apiKey: process.env.API_KEY,
    secret: process.env.SECRET_AUTH,
  },
  test: {
    username: "root",
    password: null,
    database: "initia-tech",
    host: "127.0.0.1",
    dialect: "mysql",
    apiKey: process.env.API_KEY,
    secret: process.env.SECRET_AUTH,
  },
  production: {
    username: process.env.USER_BD,
    password: process.env.PASWORD_BD,
    database: process.env.NAME_BD,
    host: process.env.HOST_NAME_MYSQL,
    dialect: "mysql",
    apiKey: process.env.API_KEY,
    secret: process.env.SECRET_AUTH,
    // dialectOptions: {
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
    //   }
    // }
  },
};
