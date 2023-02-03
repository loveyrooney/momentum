const Sequelize = require("sequelize");
const config = require("../config/config.js")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.guest = require('./guest')(sequelize, Sequelize);

module.exports = db;