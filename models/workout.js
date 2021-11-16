const mongoose = require("mongoose");
​
const { Schema } = mongoose;
​
const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      workType: {
        type: String,
        enum: ["Resistance", "Cardio"],
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      distance: {
        type: Number,
        default: 0
      },
      weight: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
    },
  ],
});
​
const Workout = mongoose.model("Workout", workoutSchema);
​
module.exports = Workout;