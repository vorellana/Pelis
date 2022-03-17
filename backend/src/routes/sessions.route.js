const { Router } = require('express');
const router = Router();
const { getAllSessions, createSession } = require('../controllers/sessions.controller');
const morgan = require('morgan')
// const { verifyToken } = require('../utils/security/authentication');

const urlBase = '/api/pelis/sessions';

// routes
router.get(urlBase, morgan('combined'), getAllSessions);
router.post(urlBase, morgan('combined'), createSession);

module.exports = router;