const { timeStamp } = require("console");
const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    timeStamp: { createdAt: "created_at" },
  },
  username: {
    type: String,
    required: true,
  },
  //   reactions: [],
  //   toJSON: {
  //     virtuals: true,
  //     getters: true,
  //   },
  //   id: false,
});

// get total count of reactions and replies on retrieval
// thoughtSchema.virtual("reactionsCount").get(function () {
//   return this.reactions.length;
// });

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
