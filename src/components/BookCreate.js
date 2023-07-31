import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  //updates title state to be hold the value of the user input
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  //submit event handler
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents data from reloading
    onCreate(title);
    setTitle(""); // update our state, set to empty string this will rerender book create component and force the input element to show a value of an empty string,
  };

  return (
    <>
      <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input className="input" value={title} onChange={handleChange} />
          <button className="button">Create!</button>
        </form>
      </div>
    </>
  );
}

export default BookCreate;
