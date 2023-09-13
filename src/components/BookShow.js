import React from "react";


function BookShow({ book }) {
  return (
    <>
      <div className="book-show">{book.title}</div>
      {/* this will show each book by title */}
    </>
  );
}

export default BookShow;
