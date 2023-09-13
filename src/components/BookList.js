import React from "react";
import BookShow from "./BookShow.js"



function BookList({books}) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book}/>
  }); // maps through the books to show each book by id, key prop need to be assigned because we are listing different elements

  return <>
    <div className="book-list">
      {renderedBooks}
    </div>
  </>
}


export default BookList;