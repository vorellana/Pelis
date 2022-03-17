const exp = {}

const { User }  = require('../models/users');
const { getBaseAll, getBaseId } = require('../services/base.service')

exp.getAllUsers = async (req, res) => {
    let users = await getBaseAll(User);
    res.status(200).json(users);
}

exp.getUserById = async (req, res) => {
    let id = req.params._id
    let user = await getBaseId(id, User)
    res.status(200).json(user);
}


module.exports = exp;