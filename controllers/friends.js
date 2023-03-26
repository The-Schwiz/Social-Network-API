const { User } = require('../models');

const createFriend = async (req, res) => {
    try {
        const { userId, friendId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json("User not found");
        }
        const friend = await User.findById(friendId);
        if (!friend) {
            return res.status(404).json("Friend not found");
        }
        console.log(user, friend);
        user.friends.push(friend);
        user.save();
        return res.status(201).json("Friend added successfully");
    } catch (err) {
        return res.status(400).json(err);
    }
};
const deleteFriend = async (req, res) => {
    try {
        const { userId, friendId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json("User not found");
        }
        const friend = await User.findById(friendId);
        if (!friend) {
            return res.status(404).json("Friend not found");
        }
        user.friends.remove(friendId);
        user.save();
        return res.status(200).json("Friend successfully removed");
    } catch (err) {
        return res.status(400).json(err);
    }
};

module.exports = { createFriend, deleteFriend };