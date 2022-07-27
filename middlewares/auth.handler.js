const boom = require('@hapi/boom');
const { development } = require('../db/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === development.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { checkApiKey };
