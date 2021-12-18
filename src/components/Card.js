import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.imageUrl} alt={item.fullName} />
        </div>
        <div className="card-back">
          <h1>{item.fullName}</h1>
          <ul>
            <li>Title: {item.title || 'no name'}</li>
            <li>House: {item.family || 'no name'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
