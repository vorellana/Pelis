const { getAllUsers, getUserById, createUser, updateUser } = require('../controllers/users.controller')
const { verifyToken } = require('../utils/security/authentication');
const { Router } = require('express');
const urlBase = '/api/pelis/users';
const morgan = require('morgan')
const router = Router();

// routes
router.get(urlBase, [morgan('combined'), verifyToken], getAllUsers);
router.get(urlBase + '/:_id', [morgan('combined'), verifyToken], getUserById);
router.post(urlBase, [morgan('combined'), verifyToken], createUser);
router.put(urlBase + '/:_id', [morgan('combined'), verifyToken], updateUser);

// test
// router.get('/info', (req, res) => {
//     res.status(200).json({message: "info 0814"})
// } );

module.exports = router;