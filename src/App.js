import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookShow from "./components/BookShow";

function App() {
  const [books, setBooks] = useState([]); // set to an empty array, as books are going to be listed as an array of objects

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // deletes book by id
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  //event handler creating a book, sets an id that is a random number
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title: title,
      },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      {books.length}
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      {/* passes books as props  */}
    </div>
  );
}

export default App;
