import React, { useState } from "react";

const Search = ({ getItem, showAll }) => {
  const [text, setText] = useState("");

  const inputHandler = (eo) => {
    setText(eo.target.value);
  };

  const buttonHandler = () => {
    getItem(text);
  };

  const showAllHandler = () => {
    showAll();
  };
  return (
    <div className="search">
      <button className="btn" onClick={showAllHandler}>
        Show all
      </button>
      <input
        type="text"
        value={text}
        onChange={inputHandler}
        placeholder="Search"
        autoFocus
      />
      <button className="btn" onClick={buttonHandler}>
        Search
      </button>
    </div>
  );
};

export default React.memo(Search);
