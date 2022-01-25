import React from "react";
import { useLocation } from "../../hooks/useLocation";
import { DataContext } from "../../context/DataContext";

import Item from "../Item";

import "./List.scss";

const List = ({ data }) => {
  const { pathname } = useLocation();
  const { addToFavorites, removeFromFavorites } = React.useContext(DataContext);

  if (data?.length === 0) return <div>Пока что данных нет ...</div>;

  return (
    <ul className="list">
      {data?.map((item, ind) => (
        <Item
          key={ind}
          item={item}
          pathname={pathname}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      ))}
    </ul>
  );
};

export default List;
