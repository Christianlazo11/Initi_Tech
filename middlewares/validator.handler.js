const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

function validatorHandlerArray(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    if (data.length >= 0) {
      data.forEach((element) => {
        const { error } = schema.validate(element, { abortEarly: false });
        if (error) {
          next(boom.badRequest(error));
        }
        next();
      });
    }
  };
}

module.exports = { validatorHandler, validatorHandlerArray };
