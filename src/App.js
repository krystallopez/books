import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]); // set to an empty array, as books are going to be listed as an array of objects

  //event handler creating a book, sets an id that is a random number 
  const createBook = (title) => {
    const updatedBooks = [...books, { 
      id: Math.round(Math.random() * 9999), 
      title: title }];
    setBooks(updatedBooks);
    console.log(books)
  };

  return (
    <div className="App">
    {books.length}
      <BookCreate onCreate={createBook} />
      <BookList  books={books}/> 
      {/* passes books as props  */}
    </div>
  );
}

export default App;
