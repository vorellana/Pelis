const exp = {}

const { Session }  = require('../models/sessions');
const { getBaseAll } = require('../services/base.service')

exp.getSessions = async (req, res) => {

    // let Sessions = await getBase({id: '077665e2-a588-11ec-a0b1-f328090f0077'}, Session)
    let Sessions = await getBaseAll(Session)

    res.status(200).json(
        Sessions
    );

}

module.exports = exp;