const exp = {}
const { Session }  = require('../models/sessions');
const { getBaseAll, createBase, updateBase } = require('../services/base.service')

exp.getAllSessions = async (req, res) => {
    let sessions = await getBaseAll(Session)
    res.status(200).json(sessions);
}

exp.createSession = async (req, res) => {
    let data = req.body;
    let result = await createBase(data, Session);
    res.status(200).json(result);
}

exp.updateSession = async (req, res) => {
    let id = req.params._id
    let data = req.body;
    let result = await updateBase(id, data, Session);
    res.status(200).json(result);
}

module.exports = exp;