const { Router } = require('express');
const router = Router();
// const { getSessions } = require('../controllers/sessions.controller')
const { getAllSessions } = require('../controllers/sessions.controller');
const morgan = require('morgan')
// const { verifyToken } = require('../utils/security/authentication');

const urlBase = '/api/pelis/sessions';

// routes
router.get(urlBase, morgan('combined'), getAllSessions);

module.exports = router;