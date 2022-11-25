const express = require("express");
const router = express.Router();
const {register,login,getAllUsers,getUser,updateUser,removeUser} = require('../controllers/user_cont')

// routes to GET api to get all users in database. link: http://localhost:{PORT}/user/getUsers
router.get("/getUsers",getAllUsers)

// routes to POST api to register user in database.  link: http://localhost:{PORT}/user/register
router.post('/register',register)

// routes to POST api to login user. link: http://localhost:{PORT}/user/login
router.post('/login',login);

// routes to GET api to search user by it's name,phone number and email. link: http://localhost:{PORT}/user/:id
router.get('/:id',getUser);

// routes to PUT api to update a user. link: http://localhost:{PORT}/user/:id
router.put('/:id',updateUser);

// routes to DELETE api to delete user. link: http://localhost:{PORT}/user/:id
router.delete('/:id',removeUser);

module.exports = router;