module.exports = (sequelize, Sequelize) => {
  const USERS_TABLE = "users";

  const usersSchema = {
    id: {
      primaryKey: true,
      unique: true,
      allowNull: false, //por verificar
      type: Sequelize.INTEGER(1).UNSIGNED,
    },
    full_name: {
      type: Sequelize.STRING,
    },
    document_type: {
      type: Sequelize.STRING,
    },
    identification_number: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    cellphone: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    active: {
      type: Sequelize.BOLEAN,
    },
    country: {
      type: Sequelize.STRING,
    },
    dev_level: {
      type: Sequelize.STRING,
    },
    studies_level: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    user_name: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    avatar_public_id: {
      type: Sequelize.STRING,
    },
    date_activation: {
      type: Sequelize.DATE,
    },
    creation_date: {
      type: Sequelize.DATE,
    },
  };
  const users = sequelize.define(USERS_TABLE, usersSchema);

  return users;
};
