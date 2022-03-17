const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'djeelzph',
    'djeelzph',
    'aKYNyFPMtSkrqY0sWY93fhlsUsnaMXUr',
    {
        host: 'kashin.db.elephantsql.com',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: true
    }
)

module.exports = { sequelize }