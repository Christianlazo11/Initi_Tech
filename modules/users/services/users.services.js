const { sendEmail } = require('../../../utils/nodemailer/configMailer');
const boom = require('@hapi/boom');
const { models } = require('./../../../libs/sequelize');
const bcrypt = require('bcrypt');

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
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req?.params;
  const body = req?.body;
  if (body.password) {
    const passwordHashed = await bcrypt.hash(body.password, 10);
    const newData = {
      ...body,
      password: passwordHashed,
    };
    const user = await models.User.findByPk(id);
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
      next(boom.notFound('USER_DOES_NOT_EXIST'));
    }
  } else {
    const user = await models.User.findByPk(id);
    if (user) {
      try {
        const condition = { id: id };
        const result = await user.update(body, condition);
        delete result.dataValues.password;
        res.send(result);
      } catch (error) {
        next(error);
      }
    } else {
      next(boom.notFound('USER_DOES_NOT_EXIST'));
    }
  }
};
