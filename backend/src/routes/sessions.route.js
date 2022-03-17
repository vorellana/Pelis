const { Router } = require('express');
const router = Router();
const { getSessions } = require('../controllers/sessions.controller')
const morgan = require('morgan')
// const { verifyToken } = require('../utils/security/authentication');

const urlBase = '/api/pelis';
    
// API v1
router.get(urlBase + '/sessions', morgan('combined'), getSessions);

module.exports = router;