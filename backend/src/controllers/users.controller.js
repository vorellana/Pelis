const exp = {}
const { User }  = require('../models/users');
const { getBaseAll, getBaseId, createBase } = require('../services/base.service')

exp.getAllUsers = async (req, res) => {
    let users = await getBaseAll(User);
    res.status(200).json(users);
}

exp.getUserById = async (req, res) => {
    let id = req.params._id
    let user = await getBaseId(id, User)
    res.status(200).json(user);
}

exp.createUser = async (req, res) => {
    let data = req.body;
    let result = await createBase(data, User);
    res.status(200).json(result);
}

module.exports = exp;