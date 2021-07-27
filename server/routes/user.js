const express = require('express');
const {
    userById,
    allUsers,
    getUser,
    updateUser,
    deleteUser,
    userPhoto,
    addFollowing,
    addFollower,
    removeFollowing,
    removeFollower,
    findPeople,
    hasAuthorization,
    addBookmark,
    removeBookmark,
    userCount,
} = require('../controllers/user');
const { requireSignin } = require('../controllers/auth');

const router = express.Router();

// Follow or Unfollow
router.put('/user/follow', requireSignin, addFollowing, addFollower);
router.put('/user/unfollow', requireSignin, removeFollowing, removeFollower);

// Add or Remove bookmark
router.put('/user/bookmark', addBookmark);
router.put('/user/unbookmark', removeBookmark);
router.get('/user/count', userCount);

// CRUD for users
router.get('/users', allUsers);
router.get('/user/:userId', requireSignin, getUser);
router.put('/user/:userId', requireSignin, updateUser);
router.delete('/user/:userId', requireSignin, deleteUser);

// Photo
router.get('/user/photo/:userId', userPhoto);

// Find people to follow
router.get('/user/findpeople/:userId', requireSignin, findPeople);

// any route containing :userId, our app will first execute userByID()
router.param('userId', userById);

module.exports = router;
