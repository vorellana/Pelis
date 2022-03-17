const exp = {}

const { Session }  = require('../models/sessions');
const { getBaseAll } = require('../services/base.service')

exp.getAllSessions = async (req, res) => {
    let sessions = await getBaseAll(Session)
    res.status(200).json(sessions);
}

module.exports = exp;