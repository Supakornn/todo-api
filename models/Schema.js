const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must fill name"],
    trim: true,
    maxLength: [20, "must be at least 20 characters"]
  },
  status: {
    type: String,
    default: "wating",
    trim: true,
    maxLength: [20, "must be at least 20 characters"]
  }
});

module.exports = mongoose.model("Todo", TodoSchema);
