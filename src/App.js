import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]); // set to an empty array, as books are going to be listed as an array of objects

  //event handler creating a book
  const createBook = (title) => {
    console.log("need to add book with", title);
  };

  return (
    <div className="App">
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
