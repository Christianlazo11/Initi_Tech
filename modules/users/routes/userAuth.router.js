const express = require('express');
const { development } = require('../../../db/config');
const jwt = require('jsonwebtoken');
const { models } = require('./../../../libs/sequelize');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async (req, res, next) => {
  try {
    const { user_name, password } = req?.body;

    const wherePassword = {
      password: password,
      user_name: user_name,
    };

    const resultGetUser = await models.User.findAll({
      where: { user_name: user_name },
    });
    const userExist = resultGetUser.length > 0 ? true : false;
    const token = jwt.sign(wherePassword, development.secret);
    if (userExist) {
      const passwordHashed = await bcrypt.compare(
        password,
        resultGetUser[0].password
      );
      if (userExist && passwordHashed) {
        res.send({
          id: resultGetUser[0]?.dataValues?.id,
          name: resultGetUser[0]?.dataValues?.full_name,
          user: resultGetUser[0]?.dataValues?.user_name,
          token: token,
        });
      }
      if (userExist && !passwordHashed) {
        res.send({
          type: 'THE_PASSWORD_IS_NOT_CORRECT',
        });
      }
    } else {
      res.send({
        type: 'USERNAME_DOES_NOT_EXIST',
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
