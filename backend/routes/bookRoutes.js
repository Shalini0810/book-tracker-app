const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Get all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Add a new book
router.post("/", async (req, res) => {
  const { title, author } = req.body;
  const book = new Book({ title, author });
  await book.save();
  res.json(book);
});

// Toggle isRead status
router.put("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  book.isRead = !book.isRead;
  await book.save();
  res.json(book);
});

// Delete a book
router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

module.exports = router;
