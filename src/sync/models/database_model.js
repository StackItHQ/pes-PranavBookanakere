const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config');

const SheetData = sequelize.define('SheetData', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    field1: { type: DataTypes.STRING },
    field2: { type: DataTypes.STRING }
}, {
    timestamps: true
});

module.exports = SheetData;
