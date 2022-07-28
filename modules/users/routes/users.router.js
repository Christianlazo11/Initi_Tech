const express = require("express");
const users = require("../services/users.services");
const { validatorHandler } = require("../../../middlewares/validator.handler");
const passport = require("passport");

const {
  createUsersSchema,
  updateUsersSchema,
  getUsersSchema,
} = require("../schemas/users.schema");
const router = express.Router();

router.post("/", validatorHandler(createUsersSchema, "body"), users.create);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  users.findAllAdmin
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  users.findOneUser
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  users.deleteOneUser
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  // validatorHandler(getUsersSchema, "params"),
  // validatorHandler(updateUsersSchema, "body"),
  users.update
);

module.exports = router;
