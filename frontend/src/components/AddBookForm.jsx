import { useState } from "react";

function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author }),
    });
    const data = await res.json();
    onAdd(data);
    setTitle(""); setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
  <input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Book Title"
    type="text"
    required
  />
  <input
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    placeholder="Author Name"
    type="text"
  />
  <input type="submit" value="Add Book" />
</form>

  );
}

export default AddBookForm;
