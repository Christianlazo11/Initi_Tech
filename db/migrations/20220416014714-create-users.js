'use strict';

const { USERS_TABLE, UsersSchema } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USERS_TABLE, UsersSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(USERS_TABLE);
  },
};
