const { sendEmail } = require("../../../utils/nodemailer/configMailer");
const boom = require("@hapi/boom");
const { models } = require("./../../../libs/sequelize");
const bcrypt = require("bcrypt");
//upload image
const cloudinary = require("./cloudinary.config");
const multer = require("multer");
const fs = require("fs");

// Create and Save a new Tutorial
exports.create = async (req, res, next) => {
  const passwordHashed = await bcrypt.hash(req?.body?.password, 10);
  const body = req?.body;
  const result = await models.User.create({
    ...body,
    password: passwordHashed,
  });

  if (result) {
    try {
      sendEmail(result.email);
      delete result.dataValues.password;
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
};

exports.findAllAdmin = async (req, res) => {
  try {
    const result = await models.User.findAll();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.findOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await models.User.findOne({ where: { id: id } });
    res.send(result);
  } catch (error) {
    next(error);
  }
};

exports.deleteOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    models.User.destroy({ where: { id: id } });
    res.send({ message: "user successfully deleted " });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req?.params;
  const body = req?.body;

  const cloudUrl = await cloudinary.uploader
    .upload(req.file.path)
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((err) => {
      err.message;
    });

  //Delete Img from uploads
  fs.unlinkSync(req.file.path);

  if (body.password) {
    const passwordHashed = await bcrypt.hash(body.password, 10);
    const newData = {
      ...body,
      password: passwordHashed,
      avatar: cloudUrl.url,
      avatar_public_id: cloudUrl.public_id,
    };
    const user = await models.User.findByPk(id);
    // console.log(user.dataValues.avatar);
    if (user) {
      try {
        const condition = { id: id };
        const result = await user.update(newData, condition);
        delete result.dataValues.password;
        res.send(result);
      } catch (error) {
        next(error);
      }
    } else {
      next(boom.notFound("USER_DOES_NOT_EXIST"));
    }
  } else {
    const user = await models.User.findByPk(id);
    // console.log(user.dataValues.avatar);
    const newData = {
      ...body,
      avatar: cloudUrl.url,
      avatar_public_id: cloudUrl.public_id,
    };
    if (user) {
      try {
        const condition = { id: id };
        const result = await user.update(newData, condition);
        delete result.dataValues.password;
        res.send(result);
      } catch (error) {
        next(error);
      }
    } else {
      next(boom.notFound("USER_DOES_NOT_EXIST"));
    }
  }
};
