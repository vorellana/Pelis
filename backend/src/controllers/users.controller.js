const exp = {}
const { User }  = require('../models/users');
const {getBaseAll, getBaseId, createBase, updateBase} = require('../services/base.service');

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

exp.updateUser = async (req, res) => {
    let id = req.params._id
    let data = req.body;
    let result = await updateBase(id, data, User);
    res.status(200).json(result);
}

module.exports = exp;