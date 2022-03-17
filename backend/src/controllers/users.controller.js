const exp = {}

const { User }  = require('../models/users');
const { getBaseAll } = require('../services/base.service')

exp.getUsers = async (req, res) => {

    // let Users = await getBaseAll({id: '077665e2-a588-11ec-a0b1-f328090f0077'}, User)
    let Users = await getBaseAll(User)

    res.status(200).json(
        Users
    );

}

module.exports = exp;