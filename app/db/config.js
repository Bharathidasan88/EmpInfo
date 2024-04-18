const Sequelize = require('sequelize');

const sequelize = new Sequelize('empinfo', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});



let db = {
    sequelize,
    Sequelize,
    userMaster: require('./models/userMaster')(Sequelize, sequelize)
}

module.exports = db