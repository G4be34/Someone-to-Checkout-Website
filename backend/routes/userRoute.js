// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// Create user route
router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json( {message: 'User created successfully'} );
})

// Delete user route
router.delete('/delete/:uid', userController.deleteUser, (req, res) => {
  res.status(200).json( {message: 'User deleted successfully'} );
})

// Login route
router.post('/login', userController.loginUser)

// Protected route
router.get('/protected', authController.verifyToken, (req, res) => {
  res.status(200).json({ message: 'You have access to this protected route', user: req.user });
});
 

module.exports = router;