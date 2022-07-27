const { User, UsersSchema } = require('./user.model');

function setupModels(sequelize) {
  User.init(UsersSchema, User.config(sequelize));

  User.associate(sequelize.models);
}

module.exports = setupModels;
