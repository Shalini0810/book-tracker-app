const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  isRead: { type: Boolean, default: false }
});

module.exports = mongoose.model("Book", BookSchema);