const exp = {}
const { Session }  = require('../models/sessions');
const { getBaseAll, createBase } = require('../services/base.service')

exp.getAllSessions = async (req, res) => {
    let sessions = await getBaseAll(Session)
    res.status(200).json(sessions);
}

exp.createSession = async (req, res) => {
    let data = req.body;
    let result = await createBase(data, Session);
    res.status(200).json(result);
}

module.exports = exp;