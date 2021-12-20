import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import axios from "axios";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import Pagination from "./components/Pagination";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [mode, setMode] = useState(0); //0 - all characters, 1 - filter characters
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(8);

  useLayoutEffect(() => {
    setIsLoading(true);
  }, [items]);

  useEffect(() => {
    axios.get(`https://thronesapi.com/api/v2/Characters`).then((response) => {
      setItems(response.data);
    });
    setIsLoading(false);
  }, []);

  const getItem = useCallback(
    (character) => {
      if (!character) {
        setMode(0);
        return;
      }
      const filterItems = items.filter((item) => {
        const name = item.fullName.toLowerCase();
        return name.includes(character);
      });
      setFilterItems(filterItems);
      setMode(1);
    },
    [items]
  );

  const showAll = useCallback(() => {
    setMode(0);
  }, []);

  const indexOfLastCharacters = currentPage * charactersPerPage;
  const indexOfFirstCharacters = indexOfLastCharacters - charactersPerPage;
  const currentCharacters = items.slice(indexOfFirstCharacters, indexOfLastCharacters);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container">
      <Header />
      {isLoading ? (
        <>
          <Search getItem={getItem} showAll={showAll} />
          <Pagination charactersPerPage={charactersPerPage} totalCharacters={items.length} paginate={paginate} mode={mode}/>
          <Characters items={currentCharacters} filterItems={filterItems} mode={mode} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default App;
