const Sequelize = require('sequelize');
const db = require('../util/database');

const Item = db.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
});

module.exports = Item;
