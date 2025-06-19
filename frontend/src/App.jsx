import { useEffect, useState } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:3000/api/books");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = (book) => setBooks([...books, book]);

  const toggleBook = async (id) => {
    const res = await fetch(`http://localhost:3000/api/books/${id}`, { method: "PUT" });
    const updated = await res.json();
    setBooks(books.map(book => book._id === id ? updated : book));
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:3000/api/books/${id}`, { method: "DELETE" });
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <div className="App">
      <h1>📚 Book Tracker</h1>
      <AddBookForm onAdd={addBook} />
      <BookList books={books} onToggle={toggleBook} onDelete={deleteBook} />
    </div>
  );
}

export default App;
