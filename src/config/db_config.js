const { Sequelize } = require('sequelize');

// Hardcoded MySQL credentials (for local testing)
const sequelize = new Sequelize('superjoin', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;
