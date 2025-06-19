function BookList({ books, onToggle, onDelete }) {
  return (
    <ul>
      {books.map(book => (
        <li key={book._id}>
          <div className="book-details">
            <strong>{book.title}</strong> by {book.author || "Unknown"}
            <span className="status">[{book.isRead ? "Read" : "Unread"}]</span>
          </div>
          <div className="book-buttons">
            <button onClick={() => onToggle(book._id)}>Toggle</button>
            <button onClick={() => onDelete(book._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
  