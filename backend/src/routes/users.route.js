const { Router } = require('express');
const router = Router();
const { getUsers } = require('../controllers/users.controller')
const morgan = require('morgan')
// const { verifyToken } = require('../utils/security/authentication');

const urlBase = '/api/pelis';

// API v1
router.get(urlBase + '/users', morgan('combined'), getUsers);

router.get('/info', (req, res) => {
    res.status(200).json({message: "info 0814"})
} );

module.exports = router;