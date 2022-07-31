const express = require("express");
const users = require("../services/users.services");
const { validatorHandler } = require("../../../middlewares/validator.handler");
const passport = require("passport");
const upload = require("../../users/services/uploadImage");
const cloudinary = require("../../users/services/cloudinary.service");

const {
  createUsersSchema,
  updateUsersSchema,
  getUsersSchema,
} = require("../schemas/users.schema");
const router = express.Router();

router.post("/", validatorHandler(createUsersSchema, "body"), users.create);

router.post("/upload", upload.single("avatar"), (req, res) => {
  res.send("Subiendo Foto nuevamente...");
  console.log(req.body);
  console.log(req.file);
  cloudinary.uploader
    .upload(req.file.path)
    .then((resp) => console.log(resp.url))
    .catch((err) => console.log(err));
});

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
  upload.single("avatar"),
  passport.authenticate("jwt", { session: false }),
  // validatorHandler(getUsersSchema, "params"),
  // validatorHandler(updateUsersSchema, "body"),
  users.update
);

module.exports = router;
