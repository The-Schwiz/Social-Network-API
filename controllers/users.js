const { User } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('friends').populate('thoughts').exec();
        return res.json(users);
    } catch (err) {
        return res.status(400).json(err);
    }
};
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('friends').populate('thoughts').exec();
        if (!user) {
            return res.status(404).json("User not found");
        }
        return res.json(user);
    } catch (err) {
        return res.status(400).json(err);
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(201).json(newUser);
    } catch (err) {
        return res.status(400).json(err);
    }
};
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!updateUser) {
            return res.status(404).json("User not found");
        }
        return res.status(201).json(updatedUser);
    } catch (err) {
        return res.status(400).json(err);
    }
};
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            return res.status(404).json("User not found");
        }
        return res.status(200).json(deletedUser);
    } catch (err) {
        return res.status(400).json(err);
    }
};



module.exports = { createUser, getUser, getAllUsers, updateUser, deleteUser };