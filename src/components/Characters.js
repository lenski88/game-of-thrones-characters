import React from "react";
import Card from "./Card";

const Characters = ({ items, filterItems, mode }) => {
  const allCharacters = items.map((item) => <Card key={item.id} item={item} />);
  const filterCharacters = filterItems.map((item) => (
    <Card key={item.id} item={item} />
  ));
  return (
    <section className="characters">
      {mode === 0 ? allCharacters : filterCharacters}
    </section>
  );
};

export default React.memo(Characters);
