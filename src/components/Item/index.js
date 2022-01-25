import React from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

import Button from "../UI/Button";

import "./Item.scss";

const Item = ({ item, pathname, addToFavorites, removeFromFavorites }) => {
  const { name, country, city, website, currency } = item;

  const isFavorites = pathname === "/favorites";

  const buttonName = isFavorites ? "Remove" : "Add";
  const buttonFunction = isFavorites ? removeFromFavorites : addToFavorites;

  return (
    <li className="item">
      <div className="item__col">
        <div className="item__name">Company name: {name}</div>
        <div className="item__content">
          <div className="item__block">
            Country: {country} , city : {city}
          </div>
          <div className="item__block">
            Website: <a href={website}>{website}</a>
          </div>
          <div className="item__block">Currency: {currency?.code}</div>
        </div>
      </div>
      <div className="item__col">
        <Button text={buttonName} onClick={() => buttonFunction(item)} />
      </div>
    </li>
  );
};

export default Item;
