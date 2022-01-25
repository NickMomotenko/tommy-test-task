import React, { useEffect } from "react";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = React.useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );
  const [favorites, setFavorites] = React.useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  useEffect(() => {
    if (data.length === 0) {
      fetchedData();
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function fetchedData() {
    const key = `9cf5ec96daf5f627ec77c0bb874ddb3e`;
    const base = `http://api.marketstack.com/v1/`;

    const url = `${base}exchanges?access_key=${key}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        localStorage.setItem("data", JSON.stringify(json));
      });
  }

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (item) => {
    setFavorites(favorites.filter((x) => x.name !== item.name));
  };

  return (
    <DataContext.Provider
      value={{ data, favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </DataContext.Provider>
  );
};
