const { getAllSessions, createSession, updateSession } = require('../controllers/sessions.controller');
const { verifyToken } = require('../utils/security/authentication');
const { Router } = require('express');
const urlBase = '/api/pelis/sessions';
const morgan = require('morgan')
const router = Router();

// routes
router.get(urlBase, [morgan('combined'), verifyToken], getAllSessions);
router.post(urlBase, [morgan('combined'), verifyToken], createSession);
router.put(urlBase + '/:_id', [morgan('combined'), verifyToken], updateSession);

module.exports = router;