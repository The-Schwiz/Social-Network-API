const mongoose = require("mongoose");

const reactionSchema = mongoose.Schema(
  {
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: new mongoose.Schema.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      get: (date) => date,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const thoughtSchema = mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
    },
    createdAt: {
      type: Date,
      get: (date) => date,
    },
    thoughtName: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  { timestamps: true, toJSON: { getters: true, virtuals: true } }
); // timestamps will add field createdAt and updatedAt

// A virtual property `reactionCount` that's computed from `reactions`.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model("Thought", thoughtSchema); // mongoose turns "Thought" into "thoughts"

module.exports = Thought;
