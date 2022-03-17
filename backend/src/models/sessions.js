const {sequelize} = require("../plugins/database");
const { Model, DataTypes, fn } = require('sequelize');

class Session extends Model{}

Session.init({
    id:                     { type: DataTypes.UUID, primaryKey: true },
    is_active:              { type: DataTypes.BOOLEAN },
    device_type:            { type: DataTypes.TEXT },
    device_ip:              { type: DataTypes.TEXT },
    location:               { type: DataTypes.TEXT },
    start_date:             { type: DataTypes.DATE, defaultValue: fn('NOW') },
    end_date:               { type: DataTypes.DATE },
    createdAt:              { type: DataTypes.DATE, field: 'created_at' },
    updatedAt:              { type: DataTypes.DATE, field: 'updated_at' },
}, { sequelize, modelName: 'tbl_sessions', schema: 'barracks', freezeTableName: true })

module.exports = { Session }