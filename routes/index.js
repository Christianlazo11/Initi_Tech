const usersroutes = require("../modules/users/routes/users.router");
const userauth = require("../modules/users/routes/userAuth.router");
const express = require("express");

function routerApi(app) {
  const baseRoute = express.Router();
  app.use("/api/v1", baseRoute);
  baseRoute.use("/users", usersroutes);
  baseRoute.use("/login", userauth);
}

module.exports = routerApi;
