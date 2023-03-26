const express = require('express');
const { createUser, getUser, getAllUsers, updateUser, deleteUser } = require('../controllers/users');
const { createFriend, deleteFriend } = require('../controllers/friends');
const router = express.Router();

router.get('/', getAllUsers);
router.get('/:userId', getUser);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);


router.post('/:userId/friends/:friendId', createFriend);
router.delete('/:userId/friends/:friendId', deleteFriend);


module.exports = router;