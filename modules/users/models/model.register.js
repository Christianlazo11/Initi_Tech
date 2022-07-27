const { db } = require('../../../models');

db.users = require('./users.model')(db.sequelize, db.Sequelize);

module.exports = { db };
