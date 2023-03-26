const express = require('express');
const router = express.Router();
const { createThought, getThought, getAllThoughts, updateThought, deleteThought } = require('../controllers/thoughts');
const { createReaction, deleteReaction } = require('../controllers/reactions');


router.get('/', getAllThoughts);
router.get('/:thoughtId', getThought);
router.post('/', createThought);
router.put('/:thoughtId', updateThought);
router.delete('/:thoughtId', deleteThought);


router.post('/:thoughtId/reactions', createReaction);
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);


module.exports = router;