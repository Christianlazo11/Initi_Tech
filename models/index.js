const { Sequelize } = require('sequelize');
const sequelize = require('../libs/sequelize');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = { db };
