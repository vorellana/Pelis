const { Router } = require('express');
const router = Router();
const { getAllUsers, getUserById } = require('../controllers/users.controller')
const morgan = require('morgan')
// const { verifyToken } = require('../utils/security/authentication');

const urlBase = '/api/pelis/users';

// routes
router.get(urlBase, morgan('combined'), getAllUsers);
router.get(urlBase + '/:_id', morgan('combined'), getUserById);

// test
// router.get('/info', (req, res) => {
//     res.status(200).json({message: "info 0814"})
// } );

module.exports = router;