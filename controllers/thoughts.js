const { Thought, User } = require ('../models');

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        return res.json(thoughts);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const getThought = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json("Thought not found");
        }
        return res.json(thought);
    } catch (err) {
        return res.status(400).json(err);
    }
};

const createThought = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json('User not found');
        };

        const { thoughtText, thoughtName } = req.body
        const newThought = await Thought.create({ thoughtText, thoughtName, username: user.username });
        user.thoughts.push(newThought._id);
        user.save();
        return res.status(201).json(newThought);
    } catch (err) {
        return res.status(400).json(err);
    }
};

const updateThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (!updateThought) {
            return res.status(404).json("Thought not found");
        }
        return res.status(201).json(updatedThought);
    } catch (err) {
        return res.status(400).json(err);
    }
};
const deleteThought = async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!deletedThought) {
            return res.status(404).json("Thought not found");
        }
        return res.status(200).json(deletedThought);
    } catch (err) {
        return res.status(400).json(err);
    }
};

module.exports = { createThought, getAllThoughts, getThought, updateThought, deleteThought };
