const Joi = require("joi");

const id = Joi.string().uuid();
const full_name = Joi.string();
const document_type = Joi.string();
const identification_number = Joi.string().min(3).max(11);
const email = Joi.string();
const cellphone = Joi.string();
const role = Joi.string();
const active = Joi.boolean();
const country = Joi.string();
const dev_level = Joi.string();
const studies_level = Joi.string();
const address = Joi.string();
const user_name = Joi.string();
const password = Joi.string();
const avatar = Joi.string();
const date_activation = Joi.string();
const creation_date = Joi.string();

const createUsersSchema = Joi.object({
  full_name: full_name.required(),
  email: email.required(),
  user_name: user_name.required(),
  password: password.required(),
});

const updateUsersSchema = Joi.object({
  id: id.required(),
  document_type: document_type.allow(""),
  identification_number: identification_number.allow(""),
  email: email.allow(""),
  cellphone: cellphone.allow(""),
  role: role.allow(""),
  active: active.allow(""),
  country: country.allow(""),
  dev_level: dev_level.allow(""),
  studies_level: studies_level.allow(""),
  address: address.allow(""),
  user_name: user_name.allow(""),
  password: password.allow(""),
  avatar: avatar.allow(""),
});

module.exports = {
  createUsersSchema,
  updateUsersSchema,
};
