const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('sql6685510', 'sql6685510', '5Hij3QPwjF', {
    host: 'sql6.freesqldatabase.com',
    dialect: 'mysql'
});
const { DataTypes } = require('sequelize');

const Transaction = sequelize.define('transactions', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    sold: DataTypes.BOOLEAN,
    dateOfSale: DataTypes.DATE
});

module.exports = Transaction;