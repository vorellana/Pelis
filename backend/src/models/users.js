const {sequelize} = require("../plugins/database");

const { Session } = require('../models/sessions')
const { Model, DataTypes } = require('sequelize');

class User extends Model{}

User.init({
    id:                     { type: DataTypes.UUID, primaryKey: true },
    name:                   { type: DataTypes.TEXT },
    last_name:              { type: DataTypes.TEXT },
    email:                  { type: DataTypes.TEXT },
    password:               { type: DataTypes.TEXT },
    nbr_sessions_allowed:   { type: DataTypes.BIGINT },
    nbr_active_sessions:    { type: DataTypes.BIGINT },
    createdAt:              { type: DataTypes.DATE, field: 'created_at' },
    updatedAt:              { type: DataTypes.DATE, field: 'updated_at' },
}, { sequelize, modelName: 'tbl_users', schema: 'barracks', freezeTableName: true })

User.hasMany(Session, { as: 'sessions', sourceKey: 'id', foreignKey: 'user_id' } )

module.exports = { User }