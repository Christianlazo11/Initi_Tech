const { Model, DataTypes, Sequelize } = require("sequelize");

const USERS_TABLE = "users";

const UsersSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4(2),
  },
  full_name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  document_type: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  identification_number: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  cellphone: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  role: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
    defaultValue: "candidate",
  },
  active: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    unique: false,
    defaultValue: false,
  },
  country: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  dev_level: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  studies_level: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  address: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  user_name: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  password: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  avatar: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  avatar_public_id: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  dateActivation: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "date_activation",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "creation_date",
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}

module.exports = { USERS_TABLE, UsersSchema, User };
