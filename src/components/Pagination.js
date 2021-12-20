import React from "react";

const Pagination = ({ charactersPerPage, totalCharacters, paginate, mode }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("render");
  return (
    <nav>
      {!mode && <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href='!#'
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>}
    </nav>
  );
};

export default Pagination;
