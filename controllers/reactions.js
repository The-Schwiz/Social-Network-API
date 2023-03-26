const { Thought } = require("../models");

const createReaction = async (req, res) => {
    try {
        const newReaction = req.body;
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json('Thought not found');
        }
        thought.reactions.push(newReaction);
        thought.save();
        return res.status(201).json('Reaction successfully created');
    } catch(err) {
        return res.status(400).json(err);
    }
};

const deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json('Thought not found');
        }
        thought.reactions.pull({ reactionId: req.params.reactionId });
        thought.save();
        return res.status(200).json('Reaction successfully removed');
    } catch(err) {
        return res.status(400).json(err);
    }
};


module.exports = { createReaction, deleteReaction };