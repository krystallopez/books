import React, { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title); // state for tracking changes made to the title

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  // sets the title to the updated event value

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        {/* handles value and change to form */}
        <button className="button is-primary">Save</button>
      </form>
    </>
  );
}


export default BookEdit;
