const exp = {};
const { v4: uuidv4 } = require('uuid');
const { Op } = require("sequelize");

exp.getBaseAll = async (Model) =>{
    const result =  await Model.findAll();
    return result;
}

exp.getBaseId = async (id, Model) =>{
    const result =  await Model.findAll({ where: {id: id}});
    return result;
}

exp.getBaseFilter = async (where, Model) =>{
    const result =  await Model.findAll({where});
    return result;
}

module.exports = exp;