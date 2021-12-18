import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Search from "./components/Search";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [mode, setMode] = useState(0); //0 - all characters, 1 - filter characters
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://thronesapi.com/api/v2/Characters`, { method: "GET" })
      .then((response) => {
        setItems(response.data);
      });
    setIsLoading(false);
  }, []);

  const getItem = (character) => {
    if (!character) {
      setMode(0);
      return;
    }
    const filterItems = items.filter(item => {
      const name = item.fullName.toLowerCase();
      return  name.includes(character)
    })
    setFilterItems(filterItems);
    setMode(1)
  }  

  const showAll = () => {
    setMode(0)
  }

  return (
    <div className="container">
      <Header />
      <Search  getItem={getItem} showAll={showAll}/>
      <Characters isLoading={isLoading} items={items} filterItems={filterItems} mode={mode} />
    </div>
  );
};

export default App;
